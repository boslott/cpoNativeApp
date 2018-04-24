import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Spinner } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import navStyles from '../../styles/navStyles';

class SingleWadingCompleteLog extends Component {
  static navigationOptions =({ navigation }) => {
    return {
      title: 'Wading Pool Complete Log',
      // title: navigation.state.params.title,
      ...navStyles
    };
  } 

  render() {
    const { loading, WadingPoolCompleteLog } = this.props;
    if (loading) return <Spinner color='blue' />;
    console.log('props2: ', WadingPoolCompleteLog.completedOn);
    return (
      <Grid style={styles.grid}>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Completed On:</Text>
          </Col>
          <Col>
            <Text>{moment(WadingPoolCompleteLog.completedOn).format('MM / DD / YYYY')}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Completed By:</Text>
          </Col>
          <Col>
            <Text>{WadingPoolCompleteLog.whoChecked}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>FAC:</Text>
          </Col>
          <Col>
            <Text>{WadingPoolCompleteLog.fac}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>pH:</Text>
          </Col>
          <Col>
            <Text>{WadingPoolCompleteLog.ph}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>CAC:</Text>
          </Col>
          <Col>
            <Text>{WadingPoolCompleteLog.cac}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>TA:</Text>
          </Col>
          <Col>
            <Text>{WadingPoolCompleteLog.ta}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>CH:</Text>
          </Col>
          <Col>
            <Text>{WadingPoolCompleteLog.ch}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>CYA:</Text>
          </Col>
          <Col>
            <Text>{WadingPoolCompleteLog.cya}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Flow Rate:</Text>
          </Col>
          <Col>
            <Text>{WadingPoolCompleteLog.flowRate}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Filter Pressure:</Text>
          </Col>
          <Col>
            <Text>{WadingPoolCompleteLog.filterPressure}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Water Level:</Text>
          </Col>
          <Col>
            <Text>{WadingPoolCompleteLog.waterLevel}</Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}

//  We define the name of the function and the name of the query
//  The query takes a paramaeter of ($id) that is of a type (ID) and it is required (!)
const singleWadingCompleteQuery = gql`
  query singleWadingCompleteLog($id: ID!) {
    WadingPoolCompleteLog(id: $id) {
      cac
      ch
      completedOn
      createdOn
      cya
      fac
      filterPressure
      flowRate
      id
      ph
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


export default graphql(singleWadingCompleteQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(SingleWadingCompleteLog);