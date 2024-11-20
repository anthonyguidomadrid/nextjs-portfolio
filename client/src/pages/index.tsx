import { initializeApollo } from '~/lib/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: React.FC = () => {
  return <></>;
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
export default Home;
