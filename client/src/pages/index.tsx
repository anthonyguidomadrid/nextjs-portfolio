import { initializeApollo } from '~/lib/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  GetHomePageDocument,
  GetHomePageQuery,
  PageHome,
} from '~/generated/graphql';
import { Seo } from '~/components/atoms';

interface HomeProps {
  pageHome: PageHome;
}

const Home: React.FC<HomeProps> = ({ pageHome }) => {
  const { SEO } = pageHome;
  return <>{SEO && <Seo {...SEO} />}</>;
};

export async function getStaticProps({ locale }: { locale: string }) {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetHomePageQuery>({
    query: GetHomePageDocument,
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
export default Home;
