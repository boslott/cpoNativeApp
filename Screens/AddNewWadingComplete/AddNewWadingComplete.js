import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Content } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import navStyles from '../../styles/navStyles';
import WadingPoolCompleteLogForm from '../../Components/WadingPoolCompleteLogForm/WadingPoolCompleteLogForm';

class AddNewWadingComplete extends Component {

  state = {
    loading: false
  }

  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'New Wading Pool Complete Log',
      ...navStyles
    };
  }

  newWadingCompleteLog = ({ whoChecked, cac, ch, completedOn, cya, fac, filterPressure, flowRate, ph, ta, waterLevel  }) => {

    const createdOn = new Date();
    const { navigation, newWadingPoolCompleteLog } = this.props;
    this.setState({ loading: true });

    newWadingPoolCompleteLog({
      variables: { whoChecked, cac, ch, completedOn, createdOn, cya, fac, filterPressure, flowRate, ph, ta, waterLevel }
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
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps='handled'
      >
      {this.state.loading ? (
        <ActivityIndicator size='large' />
      ) : (
        <Content style={styles.form}>
          <WadingPoolCompleteLogForm onSubmit={this.newWadingCompleteLog} />
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

const newWadingPoolCompleteLog = gql`
  mutation newWadingPoolCompleteLog(
    $cac: String,
    $ch: String,
    $completedOn: DateTime!,
    $createdOn: DateTime,
    $cya: String,
    $fac: String,
    $filterPressure: String,
    $flowRate: String,
    $ph: String,
    $ta: String,
    $waterLevel: String,
    $whoChecked: String!
  ) {
    createWadingPoolCompleteLog (
      cac: $cac,
      ch: $ch,
      completedOn: $completedOn,
      createdOn: $createdOn,
      cya: $cya,
      fac: $fac,
      filterPressure: $filterPressure,
      flowRate: $flowRate,
      ph: $ph,
      ta: $ta,
      waterLevel: $waterLevel,
      whoChecked: $whoChecked
    ) {
        id
        completedOn
      }
  }
`;

export default graphql(newWadingPoolCompleteLog, {
  name: 'newWadingPoolCompleteLog',
  options: {
    refreshQueries: 'allWadingPoolCompleteLogs'
  }
})(AddNewWadingComplete);