import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';

import navStyles from '../../styles/navStyles';
import MainPoolCompleteLogForm from '../../Components/MainPoolCompleteLogForm/MainPoolCompleteLogForm';

export default class AddNewMainComplete extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'Add New Main Pool Complete Log',
      ...navStyles
    };
  }

  render() {
    return (
      <ScrollView
        keyboardDismissMode='on-drag'
        keyboardShouldPersistTaps='handled'
      >
        <Content style={styles.form}>
          <MainPoolCompleteLogForm/>
        </Content>
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