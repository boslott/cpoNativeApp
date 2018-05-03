import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Form, Item, Input, Label, Button } from 'native-base';
import { Row } from 'react-native-easy-grid';
import DatePicker from 'react-native-datepicker';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export default class MainPoolCompleteLogForm extends Component {

  static defaultProps = {
    mainCompleteLog: {},
  }

  state = {
    whoChecked: this.props.mainCompleteLog.whoChecked || '',
    completedOn: this.props.mainCompleteLog.completedOn || new Date(),
    fac: this.props.mainCompleteLog.fac || '',
    cac: this.props.mainCompleteLog.cac || '',
    phMan: this.props.mainCompleteLog.phMan || '',
    ta: this.props.mainCompleteLog.ta || '',
    ch: this.props.mainCompleteLog.ch || '',
    cya: this.props.mainCompleteLog.cya || '',
    orp: this.props.mainCompleteLog.orp || '',
    phController: this.props.mainCompleteLog.phController || '',
    flowRate: this.props.mainCompleteLog.flowRate || '',
    clVolume: this.props.mainCompleteLog.clVolume || '',
    filterPressure1: this.props.mainCompleteLog.filterPressure1 || '',
    filterPressure2: this.props.mainCompleteLog.filterPressure2 || '',
    filterPressure3: this.props.mainCompleteLog.filterPressure3 || '',
    filterPressure4: this.props.mainCompleteLog.filterPressure4 || '',
    waterLevel: this.props.mainCompleteLog.waterLevel || ''
  }


  submitForm = () => {
    this.props.onSubmit({
      whoChecked: this.state.whoChecked,
      completedOn: this.state.completedOn,
      fac: this.state.fac,
      cac: this.state.cac,
      phMan: this.state.phMan,
      ta: this.state.ta,
      ch: this.state.ch,
      cya: this.state.cya,
      orp: this.state.orp,
      phController: this.state.phController,
      flowRate: this.state.flowRate,
      clVolume: this.state.clVolume,
      filterPressure1: this.state.filterPressure1,
      filterPressure2: this.state.filterPressure2,
      filterPressure3: this.state.filterPressure3,
      filterPressure4: this.state.filterPressure4,
      waterLevel: this.state.waterLevel
   });
    this.setState({
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
            <Item stackedLabel style={styles.Lcol}>
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
              <Label>pH (Drop Test)</Label>
              <Input
                keyboardType='numeric'
                onChangeText={phMan => this.setState({ phMan })}
                value={this.state.phMan}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Combined Chlorine</Label>
              <Input
                keyboardType='numeric'
                onChangeText={cac => this.setState({ cac })}
                value={this.state.cac}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Total Alkalinity</Label>
              <Input
                keyboardType='numeric'
                onChangeText={ta => this.setState({ ta })}
                value={this.state.ta}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Calcium Hardness</Label>
              <Input
                keyboardType='numeric'
                onChangeText={ch => this.setState({ ch })}
                value={this.state.ch}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Cyanuric Acid</Label>
              <Input
                keyboardType='numeric'
                onChangeText={cya => this.setState({ cya })}
                value={this.state.cya}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Water Level (Inches)</Label>
              <Input
                keyboardType='numeric'
                onChangeText={waterLevel => this.setState({ waterLevel })}
                value={this.state.waterLevel}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>ORP</Label>
              <Input
                keyboardType='numeric'
                onChangeText={orp => this.setState({ orp })}
                value={this.state.orp}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>pH (Controller)</Label>
              <Input
                keyboardType='numeric'
                onChangeText={phController => this.setState({ phController })}
                value={this.state.phController}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Flow Rate</Label>
              <Input
                keyboardType='numeric'
                onChangeText={flowRate => this.setState({ flowRate })}
                value={this.state.flowRate}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Filter Pressure #1</Label>
              <Input
                keyboardType='numeric'
                onChangeText={filterPressure1 => this.setState({ filterPressure1 })}
                value={this.state.filterPressure1}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Filter Pressure #2</Label>
              <Input
                keyboardType='numeric'
                onChangeText={filterPressure2 => this.setState({ filterPressure2 })}
                value={this.state.filterPressure2}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Filter Pressure #3</Label>
              <Input
                keyboardType='numeric'
                onChangeText={filterPressure3 => this.setState({ filterPressure3 })}
                value={this.state.filterPressure3}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Filter Pressure #4</Label>
              <Input
                keyboardType='numeric'
                onChangeText={filterPressure4 => this.setState({ filterPressure4 })}
                value={this.state.filterPressure4}
              />
            </Item>
          </Row>
          <Row>
            <Item stackedLabel>
              <Label>Chlorine Volume</Label>
              <Input
                keyboardType='numeric'
                onChangeText={clVolume => this.setState({ clVolume })}
                value={this.state.clVolume}
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
  Rcol: {
    width: '60%',
    marginLeft: '25%'
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

