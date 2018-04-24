import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Spinner, List, ListItem, Body, Right, Icon } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import navStyles from '../../styles/navStyles';

class AllQuickLogs extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'All Quick Logs',
      ...navStyles
    };
  }

  render() {
    const { loading, allQuickLogs, navigation } = this.props;
    if (loading) return <Spinner color='blue' />;
    return (
      <View>
        <List>
          <FlatList
            data={allQuickLogs}
            renderItem={({ item }) => {
              return (
                <ListItem>
                  <Body>
                    <Text
                      onPress={() => navigation.navigate('SingleQuickLog', {
                        id: item.id
                      })}
                    >{moment(item.completedOn).format('MM / DD / YY at h:mm')}</Text>
                  </Body>
                  <Right>
                  <Icon name='arrow-forward' />
                  </Right>
                </ListItem>
              )
            }}
            keyExtractor={item => item.id}
          />
        </List>
      </View>
    );
  }
}

const allQuickQuery = gql`
  query QuickLogsQuery {
    allQuickLogs(orderBy: completedOn_ASC) {
      id
      completedOn
    }
  }
`;

// The graphql function can take an object as a second argument
// We can define props in this object
export default graphql(allQuickQuery, {
  props: ({ data }) => ({ ...data})
})(AllQuickLogs);