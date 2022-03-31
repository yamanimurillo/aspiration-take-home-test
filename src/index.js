import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-boost';

const token = `${process.env.REACT_APP_API_KEY1}${process.env.REACT_APP_API_KEY2}`;

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
  headers: { authorization: `Bearer ${token}` }
});

export const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
);