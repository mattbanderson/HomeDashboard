import React, { Component } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    return (
        <View style={styles.header}>
          <Text style={styles.title}>Home Controls</Text>
        </View>
      );
  }
}

var styles = StyleSheet.create({
    header: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        paddingTop: 35,
        paddingBottom: 15,
        flex: 1,
        flexDirection: 'row',
    },
    title: {
      flex: 1,
      textAlign: 'center',
    },
    refresh: {
      textAlign: 'right',
      color: 'lightblue',
    }
});
