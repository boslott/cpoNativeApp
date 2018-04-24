import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Content } from 'native-base';

import navStyles from '../../styles/navStyles';
import WadingPoolCompleteLogForm from '../../Components/WadingPoolCompleteLogForm/WadingPoolCompleteLogForm';

export default class AddNewWadingComplete extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'New Wading Pool Complete Log',
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
          <WadingPoolCompleteLogForm />
        </Content>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    padding: 20
  }
});