import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Spinner, List, ListItem, Body, Right, Icon } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import navStyles from '../../styles/navStyles';

class AllChemAddLogs extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'All Chemical Addition Logs',
      ...navStyles
    };
  }

  render() {
    const { loading, allChemAddLogs, navigation } = this.props;
    if (loading) return <Spinner color='blue' />;
    return (
      <View>
        <List>
          <FlatList
            data={allChemAddLogs}
            renderItem={({ item }) => {
              return (
                <ListItem>
                  <Body>
                    <Text
                      onPress={() => navigation.navigate('SingleChemAddLog', {
                        id: item.id
                      })}
                    >{moment(item.completedOn).format('MM / DD / YY')
                        + ': '
                        + item.pool
                        + ' - ' 
                        + item.chemName}
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

const allChemAddQuery = gql`
  query ChemAddLogsQuery {
    allChemAddLogs(orderBy: completedOn_ASC) {
      id
      completedOn
      chemName
      pool
    }
  }
`;

// The graphql function can take an object as a second argument
// We can define props in this object
export default graphql(allChemAddQuery, {
  props: ({ data }) => ({ ...data})
})(AllChemAddLogs);