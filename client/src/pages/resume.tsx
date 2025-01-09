import { Box, Button, Fade, Grid, Grow } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { CertificationItem } from '~/components/atoms';
import { Timeline } from '~/components/molecules';
import { PageTitle } from '~/components/organisms';
import {
  GetResumePageDocument,
  GetResumePageQuery,
  PageResumeEntityResponse,
} from '~/generated/graphql';
import { initializeApollo } from '~/lib/client';
import { getMediaUrl } from '~/utils/getMediaUrl';

interface ResumeProps {
  pageResume: PageResumeEntityResponse;
}

const Resume: React.FC<ResumeProps> = ({ pageResume: { data } }) => {
  const header = data?.attributes?.Header;
  const workExperiences = data?.attributes?.workExperiences;
  const education = data?.attributes?.Education;
  const certifications = data?.attributes?.Certification;
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  return (
    <Fade in={true}>
      <Grid container flexDirection='column' spacing={8}>
        <Grid item>
          <Grid container flexDirection='column' spacing={3}>
            <Grid item>
              <PageTitle
                title={header?.Title}
                subtitle={header?.subTitle}
                isMainTitle={true}
              />
            </Grid>
            <Grid item>
              <Link
                href={getMediaUrl(data?.attributes?.CV.data?.attributes?.url)}
                target='_blank'
              >
                <Button variant='outlined'>
                  {t('resume.button.download-resume')}
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={12} md={6}>
              <PageTitle title={t('resume.title.work-experiences')}>
                <Timeline resumeItems={workExperiences} />
              </PageTitle>
            </Grid>
            <Grid item xs={12} md={6}>
              <PageTitle title={t('resume.title.education')}>
                <Timeline resumeItems={education} />
              </PageTitle>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <PageTitle title={t('resume.title.certifications')}>
            <Grid container spacing={2}>
              {certifications?.map((certification, index) => {
                return (
                  certification && (
                    <Grid
                      item
                      key={certification?.id}
                      xs={12}
                      md={6}
                      lg={4}
                      ref={ref}
                    >
                      <Grow in={inView} timeout={500 * index}>
                        <Box>
                          <CertificationItem {...certification} />
                        </Box>
                      </Grow>
                    </Grid>
                  )
                );
              })}
            </Grid>
          </PageTitle>
        </Grid>
      </Grid>
    </Fade>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetResumePageQuery>({
    query: GetResumePageDocument,
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

export default Resume;
