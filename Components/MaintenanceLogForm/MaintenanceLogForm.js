import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker, Modal, TouchableHighlight } from 'react-native';
import { Form, Item, Input, Label, ListItem, Right, Radio, Button } from 'native-base';
import { Row } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
import RadioForm from 'react-native-simple-radio-button';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const radio_props = [
  { label: 'Yes', value: true },
  { label: 'No', value: false }
];

const radio_props_pool = [
  { label: 'Main', value: 'main' },
  { label: 'Wading', value: 'wading' }
]

export default class MaintenanceLogForm extends Component {

  static defaultProps = {
    maintenanceLog: {},
  }

  state = {
    completedOn:  this.props.maintenanceLog.completedOn || '',
    maintenanceBy: this.props.maintenanceLog.maintenanceBy || '',
    pool: this.props.maintenanceLog.pool || '',
    cleanBasket: this.props.maintenanceLog.cleanBasket || false,
    backwash: this.props.maintenanceLog.backwash || false,
    backwashTime: this.props.maintenanceLog.backwashTime || '',
    vacuum: this.props.maintenanceLog.vacuum || false,
    areaWhole: this.props.maintenanceLog.areaWhole || false,
    areaShallow: this.props.maintenanceLog.areaShallow || false,
    areaLanes: this.props.maintenanceLog.areaLanes || false,
    areaDeep: this.props.maintenanceLog.areaDeep || false,
  }

  submitForm = () => {
    this.props.onSubmit({
      completedOn: this.state.completedOn,
      maintenanceBy: this.state.maintenanceBy,
      pool: this.state.pool,
      cleanBasket: this.state.cleanBasket,
      backwash: this.state.backwash,
      backwashTime: this.state.backwashTime,
      vacuum: this.state.vacuum,
      areaWhole: this.state.areaWhole,
      areaShallow: this.state.areaShallow,
      areaLanes: this.state.areaLanes,
      areaDeep: this.state.areaDeep,
    });
    this.setState({
      completedOn: '',
      maintenanceBy: '',
      pool:'',
      cleanBasket: '',
      backwash: '',
      backwashTime: '',
      vacuum: '',
      areaWhole: '',
      areaShallow: '',
      areaLanes: '',
      areaDeep: '',
    });
  }

  render() {
    return (
      <Form style={styles.container}>
        <Row>
          <Item stackedLabel>
            <Label>Maintenance By</Label>
            <Input
              onChangeText={maintenanceBy => this.setState({ maintenanceBy })}
              defaultValue={this.state.maintenanceBy}
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
            <Label style={styles.radioLabel}>Pool</Label>
          </Item>
          <RadioForm
            radio_props={radio_props_pool}
            initial={'main'}
            onPress={(value) => this.setState({ pool: value })}
          />
        </Row>
        <Row>
          <RadioForm
            radio_props={radio_props}
            initial={false}
            onPress={(value) => this.setState({ cleanBasket: value })}
          />
          <Item stackedLabel>
            <Label style={styles.radioLabel}>Clean Basket</Label>
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label style={styles.radioLabel}>Backwash</Label>
          </Item>
          <RadioForm
            radio_props={radio_props}
            initial={false}
            onPress={(value) => this.setState({ backwash: value })}
          />
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Backwash Time</Label>
            <Input
              onChangeText={backwashTime => this.setState({ backwashTime })}
              defaultValue={this.state.backwashTime}
              keyboardType='numeric'
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label style={styles.radioLabel}>Vacuum</Label>
          </Item>
          <RadioForm
            radio_props={radio_props}
            initial={false}
            onPress={(value) => this.setState({ vacuum: value })}
          />
        </Row>
        <Row>
          <RadioForm
            radio_props={radio_props}
            initial={false}
            onPress={(value) => this.setState({ areaWhole: value })}
          />
          <Item stackedLabel>
            <Label style={styles.radioLabel}>Vacuum Area: Whole Pool</Label>
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label style={styles.radioLabel}>Vacuum Area: Shallow</Label>
          </Item>
          <RadioForm
            radio_props={radio_props}
            initial={false}
            onPress={(value) => this.setState({ areaShallow: value })}
          />
        </Row>
        <Row>
          <RadioForm
            radio_props={radio_props}
            initial={false}
            onPress={(value) => this.setState({ areaLanes: value })}
          />
          <Item stackedLabel>
            <Label style={styles.radioLabel}>Vacuum Area: Lanes</Label>
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label style={styles.radioLabel}>Vacuum Area: Deep</Label>
          </Item>
          <RadioForm
            radio_props={radio_props}
            initial={false}
            onPress={(value) => this.setState({ areaDeep: value })}
          />
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
  radioLabel: {
    marginRight: 15,
    marginTop: 10,
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