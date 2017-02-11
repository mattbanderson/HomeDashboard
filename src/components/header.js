import React, { Component } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
        <View style={styles.header}>
          <Text style={styles.title}>Home Dash</Text>
        </View>
      );
  }
}

var styles = StyleSheet.create({
    header: {
        backgroundColor: 'lightblue',
        alignItems: 'center',
        padding: 10 ,
        flex: 1,
        flexDirection: 'row',
    },
    title: {
      flex: 1,
      textAlign: 'center',
    },
    settings: {
      textAlign: 'right',
    }
});