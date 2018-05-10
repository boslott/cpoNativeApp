import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Content } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import navStyles from '../../styles/navStyles';
import MaintenanceLogForm from '../../Components/MaintenanceLogForm/MaintenanceLogForm';

class AddNewMaintenanceLog extends Component {

  state = {
    loading: false
  }

  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'Add New Maintenance Log',
      ... navStyles
    };
  }

  newMaintenanceLog = ({ completedOn, maintenanceBy, pool, cleanBasket, backwash, backwashTime, vacuum, areaWhole, areaShallow, areaLanes, areaDeep }) => {
    
    const createdOn = new Date();
    const { navigation, newMaintenanceLog } = this.props;
    this.setState({ loading: true });

    newMaintenanceLog({
      variables: { completedOn, createdOn, maintenanceBy, pool, cleanBasket, backwash, backwashTime, vacuum, areaWhole, areaShallow, areaLanes, areaDeep }
    }).then(() => {
      navigation.goBack();
    }).catch(err => {
      console.log(err);
      this.setState({ loading: false });
    })
  }

  render() {
    return (
      <ScrollView
        keyboardDismissMode = 'on-drag'
        keyboardShouldPersistTaps = 'handled'
      >
      {this.state.loading ? (
        <ActivityIndicator size='large' />
      ) : (
        <Content style={styles.form}>
          <MaintenanceLogForm onSubmit={this.newMaintenanceLog} />
        </Content>
      )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 20
  }
});

const newMaintenanceLog = gql`
  mutation newMaintenanceLog(
    $completedOn: DateTime!,
    $createdOn: DateTime,
    $maintenanceBy: String!,
    $pool: String,
    $cleanBasket: Boolean,
    $backwash: Boolean,
    $backwashTime: String,
    $vacuum: Boolean,
    $areaWhole: Boolean,
    $areaShallow: Boolean,
    $areaLanes: Boolean,
    $areaDeep: Boolean
  ) {
    createMaintenanceLog (
      completedOn: $completedOn,
      createdOn: $createdOn,
      maintenanceBy: $maintenanceBy,
      pool: $pool,
      cleanBasket: $cleanBasket,
      backwash: $backwash,
      backwashTime: $backwashTime,
      vacuum: $vacuum,
      areaWhole: $areaWhole,
      areaShallow: $areaShallow,
      areaLanes: $areaLanes,
      areaDeep: $areaDeep
    ) {
        id
        completedOn
      }
  }
`;

export default graphql(newMaintenanceLog, {
  name: 'newMaintenanceLog',
  options: {
    refreshQueries: 'allMaintenanceLogs'
  }
})(AddNewMaintenanceLog);
