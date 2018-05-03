import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Form, Item, Input, Label, Button } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default class WadingPoolCompleteLogForm extends Component {

  static defaultProps = {
    wadingCompleteLog: {},
  }

  state = {
    whoChecked: this.props.wadingCompleteLog.whoChecked || '',
    completedOn: this.props.wadingCompleteLog.completedOn || '',
    fac: this.props.wadingCompleteLog.fac || '',
    cac: this.props.wadingCompleteLog.cac || '',
    ph: this.props.wadingCompleteLog.ph || '',
    ta: this.props.wadingCompleteLog.ta || '',
    ch: this.props.wadingCompleteLog.ch || '',
    cya: this.props.wadingCompleteLog.cya || '',
    flowRate: this.props.wadingCompleteLog.flowRate || '',
    filterPressure: this.props.wadingCompleteLog.filterPressure || '',
    waterLevel: this.props.wadingCompleteLog.waterLevel || ''
  }

  submitForm = () => {
    this.props.onSubmit({
      whoChecked: this.state.whoChecked,
      completedOn: this.state.completedOn,
      fac: this.state.fac,
      cac: this.state.cac,
      ph: this.state.ph,
      ta: this.state.ta,
      ch: this.state.ch,
      cya: this.state.cya,
      flowRate: this.state.flowRate,
      filterPressure: this.state.filterPressure,
      waterLevel: this.state.waterLevel
    });
    this.setState({
      whoChecked: '',
      completedOn: '',
      fac: '',
      cac: '',
      ph: '',
      ta: '',
      ch: '',
      cya: '',
      flowRate: '',
      filterPressure: '',
      waterLevel: '',
    })
  }

  render() {
    return (
      <Form style={styles.container}>
        <Row>
          <Item stackedLabel>
            <Label>Completed By</Label>
            <Input
              onChangeText={whoChecked => this.setState({ whoChecked  })}
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
            onDateChange={date => this.setState({ completedOn: date })}
            defaultValue={this.state.completedOn}
          />
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Free Chlorine</Label>
            <Input
              keyboardType='numeric'
              onChangeText={fac => this.setState({ fac })}
              defaultValue={this.state.fac}
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
            <Label>Combined Chlorine</Label>
            <Input
              keyboardType='numeric'
              onChangeText={cac => this.setState({ cac })}
              defaultValue={this.state.cac}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Total Alkalinity</Label>
            <Input
              keyboardType='numeric'
              onChangeText={ta => this.setState({ ta })}
              defaultValue={this.state.ta}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Calcium Hardness</Label>
            <Input
              keyboardType='numeric'
              onChangeText={ch => this.setState({ ch })}
              defaultValue={this.state.ch}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Cyanuric Acid</Label>
            <Input
              keyboardType='numeric'
              onChangeText={cya => this.setState({ cya })}
              defaultValue={this.state.cya}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Flow Rate</Label>
            <Input
              keyboardType='numeric'
              onChangeText={flowRate => this.setState({ flowRate })}
              defaultValue={this.state.flowRate}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Filter Pressure</Label>
            <Input
              keyboardType='numeric'
              onChangeText={filterPressure => this.setState({ filterPressure })}
              defaultValue={this.state.filterPressure}
            />
          </Item>
        </Row>
        <Row>
          <Item stackedLabel>
            <Label>Water Level (Inches)</Label>
            <Input
              keyboardType='numeric'
              onChangeText={waterLevel => this.setState({ waterLevel })}
              defaultValue={this.state.waterLevel}
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
    flex: 1
  },
  Lcol: {
    width: '40%'
  },
  dateLabel: {
    marginRight: 50
  },
  btn: {
    backgroundColor: '#DE751F',
    marginTop: 10
  },
  btnText: {
    color: '#FFF'
  }
});