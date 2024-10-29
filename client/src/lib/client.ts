import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import { useMemo } from 'react';
import merge from 'deepmerge';

require('dotenv').config();

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.STRAPI_GRAPHQL_ENDPOINT,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState: any = null) {
  const client = apolloClient ?? createApolloClient();

  // Hydrate the initial state
  if (initialState) {
    const existingCache = client.extract();
    const data = merge(existingCache, initialState);
    client.cache.restore(data);
  }

  if (typeof window === 'undefined') return client;
  if (!apolloClient) apolloClient = client;

  return client;
}

export function useApollo(initialState: any) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
