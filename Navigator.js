import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Home from './Screens/Home/Home';
import AddNewOptions from './Screens/AddNewOptions/AddNewOptions';
import AddNewMainComplete from './Screens/AddNewMainComplete/AddNewMainComplete';
import AddNewWadingComplete from './Screens/AddNewWadingComplete/AddNewWadingComplete';
import AddNewQuickLog from './Screens/AddNewQuickLog/AddNewQuickLog';
import AddNewChemAddLog from './Screens/AddNewChemAddLog/AddNewChemAddLog';
import AddNewMaintenanceLog from './Screens/AddNewMaintenanceLog/AddNewMaintenanceLog';
import ViewLogOpts from './Screens/ViewLogOpts/ViewLogOpts';
import AllMainCompleteLogs from './Screens/AllMainCompleteLogs/AllMainCompleteLogs';
import AllWadingCompleteLogs from './Screens/AllWadingCompleteLogs/AllWadingCompleteLogs';
import AllQuickLogs from './Screens/AllQuickLogs/AllQuickLogs';
import AllChemAddLogs from './Screens/AllChemAddLogs/AllChemAddLogs';
import AllMaintenanceLogs from './Screens/AllMaintenanceLogs/AllMaintenanceLogs'; 
import SingleMainCompleteLog from './Screens/SingleMainCompleteLog/SingleMainCompleteLog';
import SingleWadingCompleteLog from './Screens/SingleWadingCompleteLog/SingleWadingCompleteLog';
import SingleQuickLog from './Screens/SingleQuickLog/SingleQuickLog';
import SingleChemAddLog from './Screens/SingleChemAddLog/SingleChemAddLog';
import SingleMaintenanceLog from './Screens/SingleMaintenanceLog/SingleMaintenanceLog';

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
  AddNewChemAddLog: {
    screen: AddNewChemAddLog
  },
  AddNewMaintenanceLog: {
    screen: AddNewMaintenanceLog
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
  AllQuickLogs: {
    screen: AllQuickLogs
  },
  AllChemAddLogs: {
    screen: AllChemAddLogs
  },
  AllMaintenanceLogs: {
    screen: AllMaintenanceLogs
  },
  SingleMainCompleteLog: {
    screen: SingleMainCompleteLog
  },
  SingleWadingCompleteLog: {
    screen: SingleWadingCompleteLog
  },
  SingleQuickLog: {
    screen: SingleQuickLog
  },
  SingleChemAddLog: {
    screen: SingleChemAddLog
  },
  SingleMaintenanceLog: {
    screen: SingleMaintenanceLog
  }
});

export default Navigator;