import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Container, Button } from 'native-base';

import navStyles from '../../styles/navStyles';

export default class AddNewOptions extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'Add New Log',
      ...navStyles
    };
  }

  addNewLog = type => {
    this.props.navigation.navigate(type);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Button
          block
          bordered
          style={styles.btn}
          onPress={() => this.addNewLog('AddNewMainComplete')}
        >
          <Text style={styles.btnText}>Main Pool Complete Log</Text>
        </Button>
        <Button
          block
          bordered
          style={styles.btn}
          onPress={() => this.addNewLog('AddNewWadingComplete')}
        >
          <Text style={styles.btnText}>Wading Pool Complete Log</Text>
        </Button>
        <Button
          block
          bordered
          style={styles.btn}
          onPress={() => this.addNewLog('AddNewQuickLog')}
        >
          <Text style={styles.btnText}>Quick Check Log</Text>
        </Button>
        <Button
          block
          bordered
          style={styles.btn}
        >
          <Text style={styles.btnText}>Maintenance Log</Text>
        </Button>
        <Button
          block
          bordered
          style={styles.btn}
        >
          <Text style={styles.btnText}>Incident Log</Text>
        </Button>
        <Button
          block
          bordered
          style={styles.btn}
        >
          <Text style={styles.btnText}>Chemical Addition Log</Text>
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