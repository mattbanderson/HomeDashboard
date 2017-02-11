import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import NamedSwitch from './namedSwitch';

export default class SwitchCollection extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
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
