import React, { Component } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient , HttpLink, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';

import Navigator from './Navigator';

const httpLink = new HttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjg3pd3ei232o0128tnatoefk',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

export default class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Navigator />
      </ApolloProvider>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
