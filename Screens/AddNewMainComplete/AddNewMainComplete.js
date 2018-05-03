import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Container, Content } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import navStyles from '../../styles/navStyles';
import MainPoolCompleteLogForm from '../../Components/MainPoolCompleteLogForm/MainPoolCompleteLogForm';

class AddNewMainComplete extends Component {
  
    state = {
      loading: false
    }

  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'Add New Main Pool Complete Log',
      ...navStyles
    };
  }

  newMainCompleteLog = ({ whoChecked, completedOn, fac, cac, phMan, phController, ta, ch, cya, orp, flowRate, clVolume, filterPressure1, filterPressure2, filterPressure3, filterPressure4, waterLevel }) => {

    const createdOn = new Date();
    const { navigation, newMainPoolCompleteLog } = this.props;
    this.setState({ loading: true });

    newMainPoolCompleteLog({
      variables: { whoChecked, createdOn, completedOn, fac, cac, phMan, phController, ta, ch, cya, orp, flowRate, clVolume, filterPressure1, filterPressure2, filterPressure3, filterPressure4, waterLevel }
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
      { this.state.loading ? (
        <ActivityIndicator size='large' />
      ) : (
        <Content style={styles.form}>
          <MainPoolCompleteLogForm onSubmit={this.newMainCompleteLog} />
        </Content>
      )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  form: {
    padding: 20
  }
});

const newMainPoolCompleteLog = gql`
  mutation newMainPoolCompleteLog(
    $cac: String,
    $ch: String,
    $clVolume: String,
    $completedOn: DateTime!,
    $createdOn: DateTime,
    $cya: String,
    $fac: String,
    $filterPressure1: String,
    $filterPressure2: String,
    $filterPressure3: String,
    $filterPressure4: String,
    $flowRate: String,
    $orp: String,
    $phController: String,
    $phMan: String,
    $ta: String,
    $waterLevel: String,
    $whoChecked: String!
  ) {
    createMainPoolCompleteLog (
      cac: $cac,
      ch: $ch,
      clVolume: $clVolume,
      completedOn: $completedOn,
      createdOn: $createdOn,
      cya: $cya,
      fac: $fac,
      filterPressure1: $filterPressure1,
      filterPressure2: $filterPressure2,
      filterPressure3: $filterPressure3,
      filterPressure4: $filterPressure4,
      flowRate: $flowRate,
      orp: $orp,
      phController: $phController,
      phMan: $phMan,
      ta: $ta,
      waterLevel: $waterLevel,
      whoChecked: $whoChecked
    ) {
      id
      completedOn
      }
    }
`;

export default graphql(newMainPoolCompleteLog, {
  name: 'newMainPoolCompleteLog',
  options: {
    refreshQueries: 'allMainPoolCompleteLogs'
  }
})(AddNewMainComplete);