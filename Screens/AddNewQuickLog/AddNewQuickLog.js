import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Content } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import navStyles from '../../styles/navStyles';
import QuickLogForm from '../../Components/QuickLogForm/QuickLogForm';

class AddNewQuickLog extends Component {

  state = {
    loading: false
  }

  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'Add New Quick Log',
      ... navStyles
    };
  }

  newQuickLog = ({ whoChecked, completedOn, completedAt, cac, ch, cya, fac, ph, pool, ta, waterLevel }) => {

    const createdOn = new Date();
    const { navigation, newQuickLog } = this.props;
    this.setState({ loading: true });

    newQuickLog({
      variables: { whoChecked, completedOn, completedAt, createdOn, cac, ch, cya, fac, ph, pool, ta, waterLevel }
    }).then(() => {
      navigation.goBack();
    }).catch(err => {
      console.log(err);
      this.setState({ loading: false });
    });

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
          <QuickLogForm onSubmit={this.newQuickLog} />
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

const newQuickLog = gql`
  mutation newQuickLog(
    $cac: String,
    $ch: String,
    $completedAt: String,
    $completedOn: DateTime!,
    $createdOn: DateTime,
    $cya: String,
    $fac: String,
    $ph: String,
    $pool: String,
    $ta: String,
    $waterLevel: String,
    $whoChecked: String!
  ) {
    createQuickLog (
      cac: $cac
      ch: $ch
      completedAt: $completedAt
      completedOn: $completedOn
      createdOn: $createdOn
      cya: $cya
      fac: $fac
      ph: $ph
      pool: $pool
      ta: $ta
      waterLevel: $waterLevel
      whoChecked: $whoChecked
    ) {
        id
        completedOn
      }
  }
`;

export default graphql(newQuickLog, {
  name: 'newQuickLog',
  options: {
    refreshQueries: 'allQuickLogs'
  }
})(AddNewQuickLog);