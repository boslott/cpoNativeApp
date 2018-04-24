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
    const { loading, ChemAdd } = this.props;
    if (loading) return <Spinner color='blue' />;
    console.log('props2: ', this.props);
    return (
      <Grid style={styles.grid}>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Completed On:</Text>
          </Col>
          <Col>
            <Text>
              {moment(ChemAdd.completedOn).format('MM / DD / YYYY, h:mm')}
            </Text>
          </Col>
        </Row>
        <Row style={styles.rowEven}>
          <Col style={styles.col45}>
            <Text>Completed By:</Text>
          </Col>
          <Col>
            <Text>{ChemAdd.addedBy}</Text>
          </Col>
        </Row>
        <Row style={styles.rowOdd}>
          <Col style={styles.col45}>
            <Text>Pool: </Text>
          </Col>
          <Col>
            <Text>{ChemAdd.pool}</Text>
          </Col>
        </Row>
        {
          ChemAdd.chemsAdded.map( chem => (
            <Row key={ChemAdd.chemsAdded.indexOf(chem)} style={styles.rowOdd}>
              <Col style={styles.col45}>
                <Text>{chem.name}</Text>
              </Col>
              <Col>
                <Text>{chem.amount + ' ' + chem.unit}</Text>
              </Col>
            </Row>
          ))
        }
      </Grid>
    );
  }
}

//  We define the name of the function and the name of the query
//  The query takes a paramaeter of ($id) that is of a type (ID) and it is required (!)
const singleChemAddQuery = gql`
  query singleChemAddLog($id: ID!) {
    ChemAdd(id: $id) {
      id
      addedBy
      completedOn
      createdOn
      pool
      chemsAdded {
        id
        name
        amount
        unit
      }
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