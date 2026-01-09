import { Box, Button, Fade, Grid, Grow } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useInView } from 'react-intersection-observer';
import { CertificationItem, Seo } from '~/components/atoms';
import { Timeline } from '~/components/molecules';
import { PageTitle } from '~/components/organisms';
import {
  GetResumePageDocument,
  GetResumePageQuery,
  PageResume,
} from '~/generated/graphql';
import { initializeApollo } from '~/lib/client';

interface ResumeProps {
  pageResume: PageResume;
}

const Resume: React.FC<ResumeProps> = ({ pageResume }) => {
  const header = pageResume?.Header;
  const workExperiences = pageResume?.WorkExperience;
  const education = pageResume?.Education;
  const certifications = pageResume?.Certification;
  const seo = pageResume?.SEO;
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
  });
  const { locale } = useRouter();

  return (
    <>
      {seo && <Seo {...seo} />}
      <Fade in={true}>
        <Grid container flexDirection='column' spacing={8}>
          <Grid>
            <Grid container flexDirection='column' spacing={3}>
              <Grid>
                {header && <PageTitle {...header} isMainTitle={true} />}
              </Grid>
              <Grid>
                <Link
                  href={`/cv/${locale}/AG_CV_2025.pdf`}
                  target='_blank'
                  locale={false}
                >
                  <Button variant='outlined'>
                    {t('resume.button.download-resume')}
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <Grid container>
              <Grid size={{ xs: 12, md: 6 }}>
                <PageTitle title={t('resume.title.work-experiences')}>
                  <Timeline resumeItems={workExperiences} />
                </PageTitle>
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <PageTitle title={t('resume.title.education')}>
                  <Timeline resumeItems={education} />
                </PageTitle>
              </Grid>
            </Grid>
          </Grid>
          <Grid>
            <PageTitle title={t('resume.title.certifications')}>
              <Grid container spacing={2}>
                {certifications?.map((certification, index) => {
                  return (
                    certification && (
                      <Grid
                        size={{ xs: 12, md: 6, lg: 4 }}
                        key={certification?.id}
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
    </>
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
