import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { initializeApollo } from '~/lib/client';

const About: React.FC = () => {
  return <h1>About</h1>;
};

export async function getStaticProps({ locale }: { locale: string }) {
  const apolloClient = initializeApollo();
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default About;
