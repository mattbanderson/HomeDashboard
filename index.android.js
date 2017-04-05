import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View
} from 'react-native';
import Header from './src/components/header';
import SwitchCollection from './src/components/switchCollection';

export default class HomeDashboard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', paddingBottom: 20}}>
          <Header onRefresh={() => this.switches.getEndpoint() } />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SwitchCollection ref={switches => { this.switches = switches }} />
        </View>
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
