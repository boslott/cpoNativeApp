import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Button, Card, CardItem } from 'native-base';

import navStyles from '../../styles/navStyles';

export default class Home extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      // title: navigation.state.params.title,
      title: 'Home',
      ...navStyles
    };
  } 

  addNewLog = () => {
    this.props.navigation.navigate('AddNewOptions');
  }

  viewLogs = () => {
    this.props.navigation.navigate('ViewLogOpts');
  }

  render() {
    return (
      <Container style={styles.container}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>CPO Log App</Text>
        </View>
        <View style={styles.buttonBox}>
          <Button
            block
            bordered
            style={styles.btn}
            onPress={this.addNewLog}
          >
            <Text style={styles.btnText}>Add New Log</Text>
          </Button>
          <Button
            block
            bordered
            style={styles.btn}
            onPress={this.viewLogs}
          >
            <Text style={styles.btnText}>View Logs</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: '#DE751F',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
  },
  buttonBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 50
  },
  btn: {
    margin: 30,
    backgroundColor: '#FFED4A',
  },
  btnText: {
    color: '#2779BD',
    fontSize: 20,
  }
});