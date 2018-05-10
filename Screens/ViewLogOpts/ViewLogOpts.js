import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Button } from 'native-base';

import navStyles from '../../styles/navStyles';

export default class ViewLogOpts extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'View Logs',
      ...navStyles
    };
  }

  viewLog = type => {
    this.props.navigation.navigate(type);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Button
          block
          bordered
          style={styles.btn}
          {...this.props}
          onPress={() => this.viewLog('AllMainCompleteLogs')}
        >
          <Text style={styles.btnText}>All Main Pool Complete Logs</Text>
        </Button>
        <Button
          block
          bordered
          style={styles.btn}
          onPress={() => this.viewLog('AllWadingCompleteLogs')}
        >
          <Text style={styles.btnText}>All Wading Pool Complete Logs</Text>
        </Button>
        <Button
          block
          bordered
          style={styles.btn}
          onPress={() => this.viewLog('AllQuickLogs')}
        >
          <Text style={styles.btnText}>All Quick Check Logs</Text>
        </Button>
        <Button
          block
          bordered
          style={styles.btn}
          onPress={() => this.viewLog('AllMaintenanceLogs')}
        >
          <Text style={styles.btnText}>All Maintenance Logs</Text>
        </Button>
        <Button
          block
          bordered
          style={styles.btn}
        >
          <Text style={styles.btnText}>All Incident Logs</Text>
        </Button>
        <Button
          block
          bordered
          style={styles.btn}
          onPress={() => this.viewLog('AllChemAddLogs')}
        >
          <Text style={styles.btnText}>All Chemical Addition Logs</Text>
        </Button>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  btn: {
    margin: 15,
    backgroundColor: '#DE751F',
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold'
  }
});