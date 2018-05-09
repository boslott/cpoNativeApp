import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Grid, Col, Row } from 'react-native-easy-grid';
import { Spinner } from 'native-base';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import moment from 'moment';

import navStyles from '../../styles/navStyles';

class SingleChemAddLog extends Component {
  static navigationOptions =({ navigation }) => {
    return {
      title: 'Chemical Addition Log',
      // title: navigation.state.params.title,
      ...navStyles
    };
  } 

  render() {
    const { loading, ChemAddLog } = this.props;
    if (loading) return <Spinner color='blue' />;
    return (
      <Grid style={styles.grid}>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Completed On:</Text>
          </Col>
          <Col>
            <Text>
              {moment(ChemAddLog.completedOn).format('MM / DD / YYYY')}
            </Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Completed By:</Text>
          </Col>
          <Col>
            <Text>{ChemAddLog.addedBy}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Pool: </Text>
          </Col>
          <Col>
            <Text>{ChemAddLog.pool}</Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>chemical Name:</Text>
          </Col>
          <Col>
            <Text>{ChemAddLog.chemName}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Amount:</Text>
          </Col>
          <Col>
            <Text>{ChemAddLog.chemAmount + ' ' + ChemAddLog.chemUnit}</Text>
          </Col>
        </Row>
      </Grid>
    );
  }
}

//  We define the name of the function and the name of the query
//  The query takes a paramaeter of ($id) that is of a type (ID) and it is required (!)
const singleChemAddQuery = gql`
  query singleChemAddLog($id: ID!) {
    ChemAddLog(id: $id) {
      id
      addedBy
      completedOn
      createdOn
      pool
      chemName
      chemAmount
      chemUnit
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


export default graphql(singleChemAddQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ navigation }) => ({
    variables: {
      id: navigation.state.params.id
    }
  })
})(SingleChemAddLog);