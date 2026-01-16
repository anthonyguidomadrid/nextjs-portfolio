import { Box, Button, CircularProgress, Fade, Grid, Grow } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useRef, useState } from 'react';
import { PortfolioCard } from '~/components/molecules';
import { PageTitle } from '~/components/organisms';
import {
  Category,
  ComponentMainProject,
  GetProjectDocument,
  GetProjectPageDocument,
  GetProjectPageQuery,
  GetProjectQuery,
  PagePortfolio,
} from '~/generated/graphql';
import { initializeApollo } from '~/lib/client';
import { getAllCategoryName } from '~/utils';
import { SpinnerWrapper } from '~/components/templates/PageWrapper/PageWrapper.styles';
import { Seo } from '~/components/atoms';

const ProjectModal = dynamic(
  () =>
    import('~/components/organisms/ProjectModal').then((m) => m.ProjectModal),
  { ssr: false }
);

interface PortfolioProps {
  pagePortfolio: PagePortfolio;
  categories: Category[];
}

const Portfolio: React.FC<PortfolioProps> = ({ categories, pagePortfolio }) => {
  const apolloClient = initializeApollo();
  const router = useRouter();
  const { locale } = router;
  const isFirstRender = useRef(true);
  const [projects, setProjects] = useState<(ComponentMainProject | null)[]>(
    pagePortfolio?.Projects ?? []
  );
  const header = pagePortfolio?.Header;
  const seo = pagePortfolio?.SEO;
  const allCategoryName = getAllCategoryName(locale);

  const [currentCategory, setCurrentCategory] = useState(allCategoryName);
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

  const fetchProjects = useCallback(
    async (categoryTag: string) => {
      setIsLoading(true);
      try {
        const { data } = await apolloClient.query<GetProjectPageQuery>({
          query: GetProjectPageDocument,
          variables: { locale, categoryTag },
          fetchPolicy: 'network-only',
        });
        const projects = data?.pagePortfolio
          ?.Projects as ComponentMainProject[];

        if ((projects as ComponentMainProject[]).length === 0) {
          setCurrentCategory(allCategoryName);
          void router.push(
            {
              pathname: router.pathname,
              query: { ...router.query, category: allCategoryName },
            },
            undefined,
            { shallow: true, scroll: false }
          );
        } else if (projects) {
          setProjects(projects);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [apolloClient, locale]
  );

  const handleProjectChange = useCallback(
    async (slug?: string) => {
      if (!slug) return;
      setSelectedProject(null);
      setIsLoading(true);
      const { data } = await apolloClient.query<GetProjectPageQuery>({
        query: GetProjectDocument,
        variables: { locale, slug },
      });
      const projects =
        data?.pagePortfolio?.Projects || ([] as ComponentMainProject[]);
      if (projects) {
        setSelectedProject(projects[0] as ComponentMainProject);
        handleClickOpen();
      }
      setIsLoading(false);
    },
    [apolloClient, locale]
  );

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

  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category);
    void router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, category },
      },
      undefined,
      { shallow: true, scroll: false }
    );
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    fetchProjects(currentCategory);
  }, [currentCategory, locale, fetchProjects]);

  return (
    <>
      {seo && <Seo {...seo} />}
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
            <Grid>
              <PageTitle {...header} isMainTitle={true} />
            </Grid>
          )}
          <Grid>
            <Grid container spacing={2} justifyContent='center'>
              {[...categories]
                .sort((a, b) => (b.isMain ? 1 : 0) - (a.isMain ? 1 : 0))
                .map((category) => {
                  const tag = category.tag;
                  const isCurrent = tag === currentCategory;

                  return (
                    <Grid key={tag}>
                      <Button
                        key={tag}
                        onClick={() => handleCategoryClick(tag)}
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
          <Grid>
            <Grid container spacing={4} id='projects'>
              {projects?.map((project, index) => {
                if (!project) return null;
                return (
                  <Grid size={{ xs: 12, md: 6, lg: 4 }} key={index}>
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
  const { data } = await apolloClient.query<GetProjectQuery>({
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
