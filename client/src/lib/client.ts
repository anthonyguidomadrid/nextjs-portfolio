import { ApolloClient, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
  return new ApolloClient({
    uri: `${STRAPI_URL}/graphql`,
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
