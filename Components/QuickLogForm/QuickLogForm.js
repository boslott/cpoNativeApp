import React, { Component } from 'react';
import { StyleSheet, View, Text, Picker } from 'react-native';
import { Form, Item, Input, Label, ListItem, Right, Radio, Button } from 'native-base';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';

export default class QuickLogForm extends Component {

  state = {
    whoCheck: '',
    completedOn: '',
    completedAt: '',
    fac: '',
    ph: '',
    cac: '',
    ta: '',
    ch: '',
    cya: '',
    filterPressure: '',
    waterLevel: '',
    pool: '',
  }

  render() {
    return (
      <Form style={styles.container}>
        <Item stackedLabel>
          <Label>Completed By:</Label>
          <Input
            stackedLabel
            onChangeText={text => this.setState({ whoChecked: text })}
          />
        </Item>
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
          <Item stackedLabel style={styles.Lcol}>
            <Label>Time of Day</Label>
          </Item>
          <DatePicker
            style={styles.Rcol}
            mode='time'
            // format='hh-mm-ss'
            confirmBtnText='Ok'
            cancelBtnText='Cancel'
            date={this.state.completedAt}
            placeholder={moment().format('hh : mm')}
            onDateChange={time => this.setState({ completedAt: time })}
          />
        </View>
        <Item stackedLabel>
          <Label>FAC</Label>
          <Input
            keyboardType='numeric'
            onChangeText={text => this.setState({ fac: text })}
          />
        </Item>
        <Item stackedLabel>
          <Label>pH</Label>
          <Input
            keyboardType='numeric'
            onChangeText={text => this.setState({ ph: text })}
          />
        </Item>
        <Item stackedLabel>
          <Label>CAC</Label>
          <Input
            keyboardType='numeric'
            onChangeText={text => this.setState({ cac: text })}
          />
        </Item>
        <Item stackedLabel>
          <Label>TA</Label>
          <Input
            keyboardType='numeric'
            onChangeText={text => this.setState({ ta: text })}
          />
        </Item>
        <Item stackedLabel>
          <Label>CH</Label>
          <Input 
            keyboardType='numeric' 
            onChangeText={text => this.setState({ ch: text })}
          />
        </Item>
        <Item stackedLabel>
          <Label>CYA</Label>
          <Input
            keyboardType='numeric'
            onChangeText={text => this.setState({ cya: text })}
          />
        </Item>
        <Item stackedLabel>
          <Label>Water Level</Label>
          <Input
            keyboardType='numeric'
            onChangeText={text => this.setState({ waterLevel: text })}
          />
        </Item>
        <Item stackedLabel>
          <Label>Filter Pressure</Label>
          <Input
            keyboardType='numeric'
            onChangeText={text => this.setState({ filterPressure: text })}
          />
        </Item>
        <Picker
          selectedValue={this.state.pool}
          onValueChange={(itemValue, itemIndex) => this.setState({ pool: itemValue })}
        >
          <Picker.Item label='Main' value='Main' />
          <Picker.Item label='Wading' value = 'Wading' />
        </Picker>
        <View style={styles.buttonBox}>
          <Button
            block
            bordered
            style={styles.btn}
            onSubmit={this.addMainCompleteLog}
          >
            <Text style={styles.btnText}>Submit</Text>
          </Button>
        </View>
      </Form>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 10,
  },
  row: {
    flexDirection: 'row' ,
    alignItems: 'stretch',
    marginBottom: 20,
  },
  Lcol: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 10,
  },
  Rcol: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonBox: {
    marginLeft: 10,
    marginRight: 10
  },
  btn: {
    backgroundColor: '#DE751F',
    marginTop: 20,
  },
  btnText: {
    color: '#FFF'
  }
});