import { Box, Button, CircularProgress, Fade, Grid, Grow } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { PortfolioCard } from '~/components/molecules';
import { PageTitle, ProjectModal } from '~/components/organisms';
import {
  CategoryEntityResponseCollection,
  ComponentMainProject,
  GetProjectDocument,
  GetProjectPageDocument,
  GetProjectPageQuery,
  PageProjectEntityResponse,
} from '~/generated/graphql';
import { initializeApollo } from '~/lib/client';
import { getAllCategoryName } from '~/utils';
import { SpinnerWrapper } from '~/components/templates/PageWrapper/PageWrapper.styles';

interface PortfolioProps {
  pageProject: PageProjectEntityResponse;
  categories: CategoryEntityResponseCollection;
}

const Portfolio: React.FC<PortfolioProps> = ({
  categories: { data: categoriesArray },
  pageProject: { data: pageProjectData },
}) => {
  const apolloClient = initializeApollo();
  const { locale } = useRouter();
  const [projects, setProjects] = useState<(ComponentMainProject | null)[]>(
    pageProjectData?.attributes?.projects ?? []
  );
  const header = pageProjectData?.attributes?.Header[0];

  const [currentCategory, setCurrentCategory] = useState(
    getAllCategoryName(locale)
  );
  const [selectedProject, setSelectedProject] =
    useState<ComponentMainProject | null>(null);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCategoryChange = async (categoryTag?: string | null) => {
    if (!categoryTag) return;
    setCurrentCategory(categoryTag);
    setIsLoading(true);
    const { data } = await apolloClient.query<GetProjectPageQuery>({
      query: GetProjectPageDocument,
      variables: { locale, categoryTag },
    });
    if (data.pageProject?.data?.attributes?.projects) {
      setProjects(
        data.pageProject.data.attributes.projects as ComponentMainProject[]
      );
    }
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchProjects = async () => {
      await handleCategoryChange(getAllCategoryName(locale));
    };

    fetchProjects();
  }, [locale]);

  const handleProjectChange = async (slug?: string) => {
    if (!slug) return;
    setSelectedProject(null);
    setIsLoading(true);
    const { data } = await apolloClient.query<GetProjectPageQuery>({
      query: GetProjectDocument,
      variables: { locale, slug },
    });
    const projects = data.pageProject?.data?.attributes?.projects;
    if (projects) {
      setSelectedProject(projects[0] as ComponentMainProject);
      handleClickOpen();
    }
    setIsLoading(false);
  };

  const getProjectIndex = () =>
    projects.findIndex((p) => p?.slug === selectedProject?.slug);

  const onPrev = () => {
    const prevSlug = getProjectIndex() - 1;
    handleProjectChange(projects[prevSlug]?.slug);
  };

  const onNext = () => {
    const prevSlug = getProjectIndex() + 1;
    handleProjectChange(projects[prevSlug]?.slug);
  };

  return (
    <>
      {selectedProject && (
        <ProjectModal
          open={open}
          handleClose={handleClose}
          project={selectedProject}
          isFirst={getProjectIndex() === 0}
          isLast={getProjectIndex() === projects.length - 1}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
      {isLoading && (
        <SpinnerWrapper>
          <CircularProgress />
        </SpinnerWrapper>
      )}
      <Fade in={true}>
        <Grid container flexDirection='column' spacing={8}>
          {header && (
            <Grid item>
              <PageTitle {...header} isMainTitle={true} />
            </Grid>
          )}
          <Grid item>
            <Grid container spacing={2} justifyContent='center'>
              {[...categoriesArray]
                .sort(
                  (a, b) =>
                    (b.attributes?.isMain === true ? 1 : 0) -
                    (a.attributes?.isMain === true ? 1 : 0)
                )
                .map((category) => {
                  const tag = category.attributes?.Tag;
                  const isCurrent = tag === currentCategory;

                  return (
                    <Grid item key={tag}>
                      <Button
                        key={tag}
                        onClick={() => handleCategoryChange(tag)}
                        variant='outlined'
                        color={isCurrent ? 'secondary' : 'primary'}
                      >
                        {tag}
                      </Button>
                    </Grid>
                  );
                })}
            </Grid>
          </Grid>
          <Grid item>
            <Grid container spacing={4} id='projects'>
              {projects?.map((project, index) => {
                if (!project) return null;
                return (
                  <Grid item key={index} xs={12} md={6} lg={4}>
                    <Grow in={true} timeout={1000 * index}>
                      <Box>
                        <PortfolioCard
                          {...project}
                          onClick={() => handleProjectChange(project.slug)}
                        />
                      </Box>
                    </Grow>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetProjectPageQuery>({
    query: GetProjectPageDocument,
    variables: { locale, categoryTag: getAllCategoryName(locale) },
  });
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      initialApolloState: apolloClient.cache.extract(),
      ...data,
    },
  };
}

export default Portfolio;
