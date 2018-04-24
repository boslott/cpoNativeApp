import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Spinner } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import navStyles from '../../styles/navStyles';

class SingleQuickLog extends Component {
  static navigationOptions =({ navigation }) => {
    return {
      title: 'Quick Log',
      // title: navigation.state.params.title,
      ...navStyles
    };
  } 

  render() {
    const { loading, QuickLog } = this.props;
    if (loading) return <Spinner color='blue' />;
    console.log('props2: ', QuickLog.pool);
    return (
      <Grid style={styles.grid}>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Completed On:</Text>
          </Col>
          <Col>
            <Text>
              {moment(QuickLog.completedOn).format('   h:mm a')}
              {'\n'}
              {moment(QuickLog.completedOn).format('MM / DD / YYYY')}
            </Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Completed By:</Text>
          </Col>
          <Col>
            <Text>{QuickLog.whoChecked}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Pool: </Text>
          </Col>
          <Col>
            <Text>{QuickLog.pool}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>FAC:</Text>
          </Col>
          <Col>
            <Text>{QuickLog.fac}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>pH:</Text>
          </Col>
          <Col>
            <Text>{QuickLog.ph}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>CAC:</Text>
          </Col>
          <Col>
            <Text>{QuickLog.cac}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>TA:</Text>
          </Col>
          <Col>
            <Text>{QuickLog.ta}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>CH:</Text>
          </Col>
          <Col>
            <Text>{QuickLog.ch}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>CYA:</Text>
          </Col>
          <Col>
            <Text>{QuickLog.cya}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Water Level:</Text>
          </Col>
          <Col>
            <Text>{QuickLog.waterLevel}</Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}

//  We define the name of the function and the name of the query
//  The query takes a paramaeter of ($id) that is of a type (ID) and it is required (!)
const singleQuickQuery = gql`
  query singleQuickLog($id: ID!) {
    QuickLog(id: $id) {
      cac
      ch
      completedOn
      createdOn
      cya
      fac
      id
      ph
      pool
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


export default graphql(singleQuickQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(SingleQuickLog);