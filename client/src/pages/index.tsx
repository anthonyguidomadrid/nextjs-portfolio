import { initializeApollo } from '~/lib/client';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  GetHomePageDocument,
  GetHomePageQuery,
  HomeEntityResponse,
} from '~/generated/graphql';
import { Seo } from '~/components/atoms';

interface HomeProps {
  home: HomeEntityResponse;
}

const Home: React.FC<HomeProps> = ({ home }) => {
  const seo = home?.data?.attributes?.SEO;
  return <>{seo && <Seo {...seo} />}</>;
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
