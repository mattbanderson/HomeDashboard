/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NamedSwitch from './src/components/namedSwitch';

export default class HomeDashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
        <NamedSwitch name='Family Room' plugId={0} />
        <NamedSwitch name='Living Room Lamp' plugId={1} />
        <NamedSwitch name='Family Room Lamp 2' plugId={2} />
        <NamedSwitch name='Dining Room Lamp' plugId={3} />
        <NamedSwitch name='Cabinet' plugId={4} />
        <NamedSwitch name='Bedroom Lamp' plugId={5} />
        <NamedSwitch name='Dining Room Table' plugId={0} type='wemo' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HomeDashboard', () => HomeDashboard);
