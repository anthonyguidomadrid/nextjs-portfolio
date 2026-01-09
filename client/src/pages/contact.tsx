import { Fade, Grid } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageTitle } from '~/components/organisms';
import {
  ContactInformation as ContactInformationType,
  GetContactPageDocument,
  GetContactPageQuery,
  PageContact,
  SocialMedia,
} from '~/generated/graphql';
import { initializeApollo } from '~/lib/client';
import { ContactInformation, PrivacyPolicyModal } from '~/components/molecules';
import { ContactForm } from '~/components/molecules/ContactForm/ContactForm';
import { Seo } from '~/components/atoms';

interface ContactProps {
  pageContact: PageContact;
  contactInformation: ContactInformationType;
  socialMedia: SocialMedia;
}

const Contact: React.FC<ContactProps> = ({
  pageContact,
  contactInformation,
  socialMedia,
}) => {
  const header = pageContact?.Header;
  const seo = pageContact?.SEO;

  return (
    <>
      {seo && <Seo {...seo} />}
      <PrivacyPolicyModal content={pageContact?.PrivacyPolicy} />
      <Fade in={true}>
        <Grid container flexDirection='column' spacing={8}>
          <Grid>{header && <PageTitle {...header} isMainTitle={true} />}</Grid>
          <Grid>
            <Grid container spacing={4}>
              <Grid size={{ xs: 12, md: 6 }}>
                {contactInformation && socialMedia && (
                  <ContactInformation
                    contact={contactInformation}
                    socialMedia={socialMedia}
                  />
                )}
              </Grid>
              <Grid size={{ xs: 12, md: 6 }}>
                <ContactForm />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fade>
    </>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetContactPageQuery>({
    query: GetContactPageDocument,
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

export default Contact;
