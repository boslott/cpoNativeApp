import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Spinner } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import navStyles from '../../styles/navStyles';

class SingleMainCompleteLog extends Component {
  static navigationOptions =({ navigation }) => {
    return {
      title: 'Main Pool Complete Log',
      // title: navigation.state.params.title,
      ...navStyles
    };
  } 

  render() {
    const { loading, MainPoolCompleteLog } = this.props;
    if (loading) return <Spinner color='blue' />;
    console.log('props2: ', MainPoolCompleteLog.completedOn);
    return (
      <Grid style={styles.grid}>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Completed On:</Text>
          </Col>
          <Col>
            <Text>{moment(MainPoolCompleteLog.completedOn).format('MM / DD / YYYY')}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Completed By:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.whoChecked}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>FAC:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.fac}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>pH (Drop):</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.phMan}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>CAC:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.cac}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>TA:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.ta}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>CH:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.ch}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>CYA:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.cya}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>ORP:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.orp}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>pH (Controller):</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.phController}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Flow Rate:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.flowRate}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Filter Pressure 1:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.filterPressure1}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Filter Pressure 2:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.filterPressure2}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Filter Pressure 3:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.filterPressure3}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Filter Pressure 4:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.filterPressure4}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Chlorine Tank:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.clVolume}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Water Level:</Text>
          </Col>
          <Col>
            <Text>{MainPoolCompleteLog.waterLevel}</Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}

//  We define the name of the function and the name of the query
//  The query takes a paramaeter of ($id) that is of a type (ID) and it is required (!)
const singleMainCompleteQuery = gql`
  query singleMainCompleteLog($id: ID!) {
    MainPoolCompleteLog(id: $id) {
      cac
      ch
      clVolume
      completedOn
      createdOn
      cya
      fac
      filterPressure1
      filterPressure2
      filterPressure3
      filterPressure4
      flowRate
      id
      orp
      phController
      phMan
      ta
      waterLevel
      whoChecked
    }
  }
`;

const styles = StyleSheet.create({
  grid: {
    marginTop: 10,
    padding: 15,
  },
  rowOdd: {
    height: 25,
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#3D4852',
    display: 'flex',
    alignItems: 'center',
  },
  rowEven: {
    height: 25,
    padding: 5,
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderColor: '#3D4852',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#DAE1E7',
  },
  col45: {
    width: '45%'
  }
});


export default graphql(singleMainCompleteQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(SingleMainCompleteLog);