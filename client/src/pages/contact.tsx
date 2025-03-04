import { Fade, Grid } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageTitle } from '~/components/organisms';
import {
  ContactInformationEntityResponse,
  GetContactPageDocument,
  GetContactPageQuery,
  PageContactEntityResponse,
  SocialMediaEntityResponse,
} from '~/generated/graphql';
import { initializeApollo } from '~/lib/client';
import { ContactInformation, PrivacyPolicyModal } from '~/components/molecules';
import { ContactForm } from '~/components/molecules/ContactForm/ContactForm';
import { Seo } from '~/components/atoms';

interface ContactProps {
  pageContact: PageContactEntityResponse;
  contactInformation: ContactInformationEntityResponse;
  socialMedia: SocialMediaEntityResponse;
}

const Contact: React.FC<ContactProps> = ({
  pageContact: { data: pageContactData },
  contactInformation: { data: contactInformationData },
  socialMedia: { data: socialMediaData },
}) => {
  const header = pageContactData?.attributes?.Header;
  const contact = contactInformationData?.attributes?.Contact;
  const seo = pageContactData?.attributes?.SEO;

  return (
    <>
      {seo && <Seo {...seo} />}
      <PrivacyPolicyModal
        content={pageContactData?.attributes?.PrivacyPolicy}
      />
      <Fade in={true}>
        <Grid container flexDirection='column' spacing={8}>
          <Grid item>
            {header && <PageTitle {...header} isMainTitle={true} />}
          </Grid>
          <Grid item>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                {contact && socialMediaData?.attributes && (
                  <ContactInformation
                    contact={contact}
                    socialMedia={socialMediaData?.attributes}
                  />
                )}
              </Grid>
              <Grid item xs={12} md={6}>
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
