import React, { Component } from 'react';
import { View, Text } from 'react-native';

class EmployeeList extends Component {
  render() {
    return (
      <View style={styles.employeeStyle}>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
        <Text>Employee List</Text>
      </View>
    );
  }
}

const styles = {
  employeeStyle: {
    marginTop: 0
  }
};

export default EmployeeList;
