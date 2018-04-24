import React, { Component } from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { Content } from 'native-base';

import navStyles from '../../styles/navStyles';
import QuickLogForm from '../../Components/QuickLogForm/QuickLogForm';

export default class AddNewQuickLog extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'Add New Quick Log',
      ... navStyles
    };
  }

  render() {
    return (
      <ScrollView
        keyboardDismissMode = 'on-drag'
        keyboardShouldPersistTaps = 'handled'
      >
        <Content>
          <QuickLogForm />
        </Content>
      </ScrollView>
    );
  }
}