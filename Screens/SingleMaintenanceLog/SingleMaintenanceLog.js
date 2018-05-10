import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Spinner } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import navStyles from '../../styles/navStyles';

class SingleMaintenanceLog extends Component {
  static navigationOptions =({ navigation }) => {
    return {
      title: 'Maintenance Log',
      // title: navigation.state.params.title,
      ...navStyles
    };
  } 

  render() {
    const { loading, MaintenanceLog } = this.props;
    if (loading) return <Spinner color='blue' />;
    return (
      <Grid style={styles.grid}>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Completed On:</Text>
          </Col>
          <Col>
            <Text>
              {moment(MaintenanceLog.completedOn).format('MM / DD / YYYY')}
            </Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Completed By:</Text>
          </Col>
          <Col>
            <Text>{MaintenanceLog.maintenanceBy}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Pool: </Text>
          </Col>
          <Col>
            <Text>{MaintenanceLog.pool}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Cleaned Basket</Text>
          </Col>
          <Col>
            {MaintenanceLog.cleanBasket ? (
              <Text>Yes</Text>
            ) : (
              <Text>No</Text>
            )}
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Backwash</Text>
          </Col>
          <Col>
            {MaintenanceLog.backwash ? (
              <Text>{'Yes - ' + MaintenanceLog.backwashTime + ' mins'}</Text>
            ) : (
              <Text>No</Text>
            )}
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Vacuum</Text>
          </Col>
          <Col>
            {MaintenanceLog.vacuum ? (
              <Text>Yes</Text>
            ) : (
              <Text>No</Text>
            )}
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Vacuum Areas</Text>
          </Col>
          <Col>
            {MaintenanceLog.areaWhole ? (
              <Text>Whole Pool</Text>
            ) : (
              MaintenanceLog.areaShallow ? (<Text>Shallow Area</Text>) :
              MaintenanceLog.areaLanes ? (<Text>Lanes</Text>) :
              MaintenanceLog.areaDeep ? (<Text>Deep Area</Text>) : ''
            )}
          </Col>
        </Row>
      </Grid>
    );
  }
}

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

const singleMaintenanceLogQuery = gql`
  query singleMaintenanceLog($id: ID!) {
    MaintenanceLog(id: $id) {
      id
      maintenanceBy
      completedOn
      createdOn
      pool
      cleanBasket
      backwash
      backwashTime
      vacuum
      areaWhole
      areaShallow
      areaLanes
      areaDeep
    }
  }
`;

export default graphql(singleMaintenanceLogQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(SingleMaintenanceLog);
