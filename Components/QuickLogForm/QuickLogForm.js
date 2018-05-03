import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker, Modal, TouchableHighlight } from 'react-native';
import { Form, Item, Input, Label, ListItem, Right, Radio, Button } from 'native-base';
import { Row } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default class QuickLogForm extends Component {

  static defaultProps = {
    quickLog: {},
  }

  state = {
    modalVisible: false,
    whoChecked: this.props.quickLog.whoChecked || '',
    completedOn: this.props.quickLog.completedOn || '',
    completedAt: this.props.quickLog.completedAt || '',
    fac: this.props.quickLog.fac || '',
    ph: this.props.quickLog.ph || '',
    cac: this.props.quickLog.cac || '',
    ta: this.props.quickLog.ta || '',
    ch: this.props.quickLog.ch || '',
    cya: this.props.quickLog.cya || '',
    waterLevel: this.props.quickLog.waterLevel || '',
    pool: this.props.quickLog.pool || '',
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  submitForm = () => {
    this.props.onSubmit({
      whoChecked: this.state.whoChecked,
      completedOn: this.state.completedOn,
      completedAt: this.state.completedAt,
      fac: this.state.fac,
      ph: this.state.ph,
      cac: this.state.cac,
      ta: this.state.ta,
      ch: this.state.ch,
      cya: this.state.cya,
      waterLevel: this.state.waterLevel,
      pool: this.state.pool,
    });
    this.setState({
      whoChecked: '',
      completedOn: '',
      completedAt: '',
      fac: '',
      ph: '',
      cac: '',
      ta: '',
      ch: '',
      cya: '',
      waterLevel: '',
      pool: '',
    });
  }

  render() {
    return (
      <Form style={styles.container}>
        <Row>
          <Item stackedLabel>
            <Label>Completed By</Label>
            <Input
              onChangeText={whoChecked => this.setState({ whoChecked })}
              defaultValue={this.state.whoChecked}
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
        <Row>
          <Item stackedLabel>
            <Label>Time of Day</Label>
          </Item>
          <DatePicker
            style={styles.Rcol}
            mode='time'
            confirmBtnText='Ok'
            cancelBtnText='Cancel'
            date={this.state.completedAt}
            // placeholder={moment(this.state.completedAt).format('hh : mm')}
            onDateChange={completedAt => this.setState({ completedAt })}
            defaultValue={this.state.completedAt}
          />
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>FAC</Label>
            <Input
              keyboardType='numeric'
              onChangeText={fac => this.setState({ fac })}
              defaultValue={this.state.face}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>pH</Label>
            <Input
              keyboardType='numeric'
              onChangeText={ph => this.setState({ ph })}
              defaultValue={this.state.ph}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>CAC</Label>
            <Input
              keyboardType='numeric'
              onChangeText={cac => this.setState({ cac })}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>TA</Label>
            <Input
              keyboardType='numeric'
              onChangeText={ta => this.setState({ ta })}
              defaultValue={this.state.ta}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>CH</Label>
            <Input 
              keyboardType='numeric' 
              onChangeText={ch => this.setState({ ch })}
              defaultValue={this.state.ch}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>CYA</Label>
            <Input
              keyboardType='numeric'
              onChangeText={cya => this.setState({ cya })}
              defaultValue={this.state.cya}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Water Level</Label>
            <Input
              keyboardType='numeric'
              onChangeText={waterLevel => this.setState({ waterLevel })}
              defaultValue={this.state.waterLevel}
            />
          </Item>
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
    marginLeft: '20%'
  },
  pool: {
    paddingTop: 10,
    paddingBottom: 30
  },
  colorGray: {
    color: '#3D4852'
  },
  btn: {
    backgroundColor: '#DE751F',
    marginTop: 10,
  },
  btnText: {
    color: '#FFF'
  }
});