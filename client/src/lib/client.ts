import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { useMemo } from 'react';

import merge from 'deepmerge';

// Only load dotenv in Node.js environments (not in browser)
if (
  typeof process !== 'undefined' &&
  process.versions &&
  process.versions.node
) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  require('dotenv').config();
}

let apolloClient: ApolloClient | undefined;

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
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
    const data = merge(
      existingCache as Record<string, any>,
      initialState as Record<string, any>
    );
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
