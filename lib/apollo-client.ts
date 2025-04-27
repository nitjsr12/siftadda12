import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL,
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});