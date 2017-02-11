import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import NamedSwitch from './namedSwitch';

export default class SwitchCollection extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <NamedSwitch name='Family Room' deviceId={0} />
        <NamedSwitch name='Living Room Lamp' deviceId={1} />
        <NamedSwitch name='Family Room Lamp 2' deviceId={2} />
        <NamedSwitch name='Dining Room Lamp' deviceId={3} />
        <NamedSwitch name='Cabinet' deviceId={4} />
        <NamedSwitch name='Bedroom Lamp' deviceId={5} />
        <NamedSwitch name='Dining Room Table' deviceId={0} type='wemo' />
        <NamedSwitch name='Garage Door' deviceId={1} type='garage' />
      </View>
    );
  }
}
