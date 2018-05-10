import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Spinner, List, ListItem, Body, Right, Icon } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import navStyles from '../../styles/navStyles';

class AllMaintenanceLogs extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'All Maintenance Logs',
      ...navStyles
    };
  }

  render() {
    const { loading, allMaintenanceLogs, navigation } = this.props;
    if (loading) return <Spinner color='blue' />;
    return (
      <View>
        <List>
          <FlatList
            data={allMaintenanceLogs}
            renderItem={({ item }) => {
              return (
                <ListItem>
                  <Body>
                    <Text
                      onPress={() => navigation.navigate('SingleMaintenanceLog', {
                        id: item.id
                      })}
                    >{moment(item.completedOn).format('MM / DD / YY')}
                    </Text>
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

const allMaintenanceLogsQuery = gql`
  query MaintenanceLogsQuery {
    allMaintenanceLogs(orderBy: completedOn_ASC) {
      id
      completedOn
    }
  }
`;

export default graphql(allMaintenanceLogsQuery, {
  props: ({ data }) => ({ ...data})
})(AllMaintenanceLogs);
