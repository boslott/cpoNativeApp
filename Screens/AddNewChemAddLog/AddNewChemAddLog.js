import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Content } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import navStyles from '../../styles/navStyles';
import ChemAddLogForm from '../../Components/ChemAddLogForm/ChemAddLogForm';

class AddNewChemAddLog extends Component {

  state = {
    loading: false
  }

  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'Add New Chemical Addition Log',
      ... navStyles
    };
  }

  newChemAddLog = ({ completedOn, addedBy, pool, chemName, chemAmount, chemUnit }) => {
    
    const createdOn = new Date();
    const { navigation, newChemAddLog } = this.props;
    this.setState({ loading: true });

    newChemAddLog({
      variables: { addedBy, completedOn, createdOn, pool, chemName, chemAmount, chemUnit }
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
          <ChemAddLogForm onSubmit={this.newChemAddLog} />
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

const newChemAddLog = gql`
  mutation newChemAddLog(
    $addedBy: String!,
    $completedOn: DateTime!,
    $createdOn: DateTime,
    $pool: String,
    $chemName: String,
    $chemAmount: String,
    $chemUnit: String,
  ) {
    createChemAddLog (
      addedBy: $addedBy,
      completedOn: $completedOn,
      createdOn: $createdOn,
      pool: $pool,
      chemName: $chemName,
      chemAmount: $chemAmount,
      chemUnit: $chemUnit
    ) {
        id
        completedOn
      }
  }
`;


export default graphql(newChemAddLog, {
  name: 'newChemAddLog',
  options: {
    refreshQueries: 'allChemAddLogs'
  }
})(AddNewChemAddLog);
