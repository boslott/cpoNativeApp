import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Screens/Home/Home';
import AddNewOptions from './Screens/AddNewOptions/AddNewOptions';
import AddNewMainComplete from './Screens/AddNewMainComplete/AddNewMainComplete';
import AddNewWadingComplete from './Screens/AddNewWadingComplete/AddNewWadingComplete';
import AddNewQuickLog from './Screens/AddNewQuickLog/AddNewQuickLog';
import ViewLogOpts from './Screens/ViewLogOpts/ViewLogOpts';
import AllMainCompleteLogs from './Screens/AllMainCompleteLogs/AllMainCompleteLogs';
import AllWadingCompleteLogs from './Screens/AllWadingCompleteLogs/AllWadingCompleteLogs';
import SingleMainCompleteLog from './Screens/SingleMainCompleteLog/SingleMainCompleteLog';
import SingleWadingCompleteLog from './Screens/SingleWadingCompleteLog/SingleWadingCompleteLog';

const Navigator = StackNavigator ({
  Home: {
    screen: Home
  },

  //  Add / Update Screens
  AddNewOptions: {
    screen: AddNewOptions
  },
  AddNewMainComplete: {
    screen: AddNewMainComplete
  },
  AddNewWadingComplete: {
    screen: AddNewWadingComplete
  },
  AddNewQuickLog: {
    screen: AddNewQuickLog
  },

  //  Viewing Screens
  ViewLogOpts: {
    screen: ViewLogOpts
  },
  AllMainCompleteLogs: {
    screen: AllMainCompleteLogs
  },
  AllWadingCompleteLogs: {
    screen: AllWadingCompleteLogs
  },
  SingleMainCompleteLog: {
    screen: SingleMainCompleteLog
  },
  SingleWadingCompleteLog: {
    screen: SingleWadingCompleteLog
  }
});

export default Navigator;