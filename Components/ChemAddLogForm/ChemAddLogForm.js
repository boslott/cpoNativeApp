import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker, Modal, TouchableHighlight } from 'react-native';
import { Form, Item, Input, Label, ListItem, Right, Radio, Button } from 'native-base';
import { Row } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default class ChemAddLogForm extends Component {

  static defaultProps = {
    chemAddLog: {},
  }

  state = {
    completedOn: this.props.chemAddLog.completedOn || '',
    addedBy: this.props.chemAddLog.addedBy || '',
    pool: this.props.chemAddLog.pool || '',
    chemsAdded: this.props.chemAddLog.chemsAdded || [],
    modalVisible: false,
    addModalVisible: false,
    chemName: '',
    chemAmount: '',
    chemUnit: '',
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  submitForm = () => {
    this.props.onSubmit({
      completedOn: this.state.completedOn,
      addedBy: this.state.addedBy,
      pool: this.state.pool,
      chemName: this.state.chemName,
      chemAmount: this.state.chemAmount,
      chemUnit: this.state.chemUnit,
    });
    this.setState({
      completedOn: '',
      addedBy: '',
      pool: '',
      chemName: '',
      chemAmount: '',
      chemUnit: '',
    });
  }

  render() {
    return (
      <Form style={styles.container}>
        <Row>
          <Item stackedLabel>
            <Label>Chemicals Added By</Label>
            <Input
              onChangeText={addedBy => this.setState({ addedBy })}
              defaultValue={this.state.addedBy}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Log Date</Label>
          </Item>
          <DatePicker
            style={styles.Rcol}
            mode='date'
            confirmBtnText='Ok'
            cancelBtnText='Cancel'
            date={this.state.completedOn}
            onDateChange={completedOn => this.setState({ completedOn })}
            defaultValue={this.state.completedOn}
          />
        </Row>
        <Modal
          animationType='slide'
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed');
          }}
        >
          <Picker
            selectedValue={this.state.pool}
            onValueChange={(itemValue, itemIndex) => {
              this.setState({ pool: itemValue });
              this.setModalVisible(false);
            }}
          >
            <Picker.Item label='Main' value='Main' />
            <Picker.Item label='Wading' value = 'Wading' />
          </Picker>
        </Modal>
        <Row>
          <Item>
            <TouchableHighlight
              onPress={() => this.setModalVisible(true)}
              style={styles.pool}
            >
              {this.state.pool === '' ? (
                <Text style={styles.colorGray}>Choose Which Pool</Text>
              ) : (
                <Text style={styles.colorGray}>{'Pool: ' + this.state.pool}</Text>
              )}
            </TouchableHighlight>
          </Item>
        </Row>
        
        <Row>
          <Item stackedLabel>
            <Label>Chemical Name:</Label>
            <Input
              onChangeText={chemName => this.setState({ chemName })}
              defaultValue={this.state.chemName}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Chemical Amount:</Label>
            <Input
              onChangeText={chemAmount => this.setState({ chemAmount })}
              defaultValue={this.state.chemAmount}
              keyboardType='numeric'
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Chemical Unit:</Label>
            <Input
              onChangeText={chemUnit => this.setState({ chemUnit })}
              defaultValue={this.state.chemUnit}
            />
          </Item>
        </Row>
        <Button
          block
          bordered
          style={styles.btn}
          onPress={this.submitForm}
        >
          <Text style={styles.btnText}>Submit</Text>
        </Button>
      </Form>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 5
    },
    Rcol: {
      width: '60%',
      marginLeft: '15%',
      marginTop: 10
    },
    pool: {
      paddingTop: 10,
      paddingBottom: 30
    },
    colorGray: {
      color: '#3D4852'
    },
    center: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    btn: {
      backgroundColor: '#DE751F',
      marginTop: 10,
    },
    btnText: {
      color: '#FFF'
    },
  });