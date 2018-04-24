import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Form, Item, Input, Label, Button } from 'native-base';
import DatePicker from 'react-native-datepicker';

export default class MainPoolCompleteLogForm extends Component {

  state = {
    whoChecked: '',
    completedOn: '',
    fac: '',
    cac: '',
    phMan: '',
    ta: '',
    ch: '',
    cya: '',
    orp: '',
    phController: '',
    flowRate: '',
    clVolume: '',
    filterPressure1: '',
    filterPressure2: '',
    filterPressure3: '',
    filterPressure4: '',
    waterLevel: ''
  }

  addMainCompleteLog = () => {
    API.addMainCompleteLog(this.state)
      .then(this.setState({
        whoChecked: '',
        completedOn: '',
        fac: '',
        cac: '',
        phMan: '',
        ta: '',
        ch: '',
        cya: '',
        orp: '',
        phController: '',
        flowRate: '',
        clVolume: '',
        filterPressure1: '',
        filterPressure2: '',
        filterPressure3: '',
        filterPressure4: '',
        waterLevel: ''
      }))
      .catch(err => console.log(err));
  }

  render() {
    return (
        <Form style={styles.container}>
          <View style={styles.row}>
            <Item stackedLabel>
              <Label>Completed By:</Label>
              <Input onChangeText={text => this.setState({whoChecked: text })} />
            </Item>
          </View>
          <View style={styles.row}>
            <Item stackedLabel style={styles.Lcol}>
              <Label>Log Date</Label>
            </Item>
            <DatePicker
              style={styles.Rcol}
              mode='date'
              format='MM-DD-YYYY'
              confirmBtnText='Ok'
              cancelBtnText='Cancel'
              date={this.state.completedOn}
              onDateChange={date => this.setState({ completedOn: date })}
            />
          </View>
          <View style={styles.row}>
            <View style={styles.Lcol}>
              <Item stackedLabel>
                <Label>Free Chlorine</Label>
                <Input
                  keyboardType='numeric'
                  onChangeText={text => this.setState({ fac: text })}
                />
              </Item>
              <Item stackedLabel>
                <Label>Combined Chlorine</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>Total Alkalinity</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>ORP</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>Flow Rate</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>Filter Pressure #1</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>Filter Pressure #3</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>Water Level (Inches)</Label>
                <Input keyboardType='numeric' />
              </Item>
            </View>
            <View style={styles.Rcol}>
              <Item stackedLabel>
                <Label>pH (Drop Test)</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>Cyanuric Acid</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>Calcium Hardness</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>pH (Controller)</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>Chlorine Volume</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>Filter Pressure #2</Label>
                <Input keyboardType='numeric' />
              </Item>
              <Item stackedLabel>
                <Label>Filter Pressure #4</Label>
                <Input keyboardType='numeric' />
              </Item>
            </View>
          </View>
          <Button
            block
            bordered
            style={styles.btn}
            onSubmit={this.addMainCompleteLog}
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
  row: {
    flexDirection: 'row' ,
    alignItems: 'stretch',
    marginBottom: 20,
  },
  Lcol: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingRight: 10,
  },
  Rcol: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  dateLabel: {
    marginRight: 50
  },
  btn: {
    backgroundColor: '#DE751F'
  },
  btnText: {
    color: '#FFF'
  }
});