import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  GetAboutPageDocument,
  GetAboutPageQuery,
  PageAboutEntityResponse,
} from '~/generated/graphql';
import { initializeApollo } from '~/lib/client';

interface AboutProps {
  pageAbout: PageAboutEntityResponse;
}

const About: React.FC<AboutProps> = ({ pageAbout }) => {
  console.log({ pageAbout });
  return <h1>About</h1>;
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
