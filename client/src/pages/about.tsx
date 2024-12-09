import { Grid } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SkillWrapper } from '~/components/molecules';
import { PageTitle } from '~/components/organisms';
import {
  GetAboutPageDocument,
  GetAboutPageQuery,
  PageAboutEntityResponse,
} from '~/generated/graphql';
import { initializeApollo } from '~/lib/client';

interface AboutProps {
  pageAbout: PageAboutEntityResponse;
}

const About: React.FC<AboutProps> = ({ pageAbout: { data } }) => {
  const { t } = useTranslation();
  const header = data?.attributes?.Header;
  const computerSkills = data?.attributes?.computerSkills;
  const languageSkills = data?.attributes?.languages;
  return (
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
      {computerSkills && (
        <Grid item>
          <PageTitle title={t('about.title.computer')}>
            <SkillWrapper skills={computerSkills} />
          </PageTitle>
        </Grid>
      )}
      {languageSkills && (
        <Grid item>
          <PageTitle title={t('about.title.languages')}>
            <SkillWrapper skills={languageSkills} />
          </PageTitle>
        </Grid>
      )}
    </Grid>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetAboutPageQuery>({
    query: GetAboutPageDocument,
    variables: { locale },
  });
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      initialApolloState: apolloClient.cache.extract(),
      ...data,
    },
  };
}

export default About;
