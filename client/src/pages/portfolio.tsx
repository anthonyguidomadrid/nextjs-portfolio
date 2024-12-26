import { Button, Grid } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { PortfolioCard } from '~/components/molecules';
import { PageTitle } from '~/components/organisms';
import {
  CategoryEntityResponseCollection,
  ComponentMainProject,
  GetProjectPageDocument,
  GetProjectPageQuery,
  PageProjectEntityResponse,
} from '~/generated/graphql';
import { initializeApollo } from '~/lib/client';
import { scroller } from 'react-scroll';
import { getAllCategoryName } from '~/utils';
import { InViewFadeIn } from '~/components/templates';

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
  const header = pageProjectData?.attributes?.Header[0];
  const [projects, setProjects] = useState<(ComponentMainProject | null)[]>(
    pageProjectData?.attributes?.projects ?? []
  );

  const [currentCategory, setCurrentCategory] = useState(
    getAllCategoryName(locale)
  );

  const handleCategoryChange = async (categoryTag?: string | null) => {
    if (!categoryTag) return;
    setCurrentCategory(categoryTag);
    const { data } = await apolloClient.query<GetProjectPageQuery>({
      query: GetProjectPageDocument,
      variables: { locale, categoryTag },
    });
    if (data.pageProject?.data?.attributes?.projects) {
      setProjects(
        data.pageProject.data.attributes.projects as ComponentMainProject[]
      );
      scroller.scrollTo('projects', {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuad',
      });
    }
  };
  return (
    <InViewFadeIn alwaysAnimate>
      <Grid container flexDirection='column' spacing={8}>
        <Grid item>
          <PageTitle
            title={header?.Title}
            subtitle={header?.subTitle}
            description={header?.description}
            picture={header?.picture}
            isMainTitle={true}
          />
        </Grid>
        <Grid item>
          <Grid container spacing={2} justifyContent='center'>
            {categoriesArray.map((category) => {
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
                  <InViewFadeIn alwaysAnimate={true} index={index}>
                    <PortfolioCard {...project} />
                  </InViewFadeIn>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </InViewFadeIn>
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
