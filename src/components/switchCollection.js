import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import NamedSwitch from './namedSwitch';
import config from '../config/config';

export default class SwitchCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api: config.internalApi,
    };
  }

  getEndpoint() {
    fetch(this.state.api + "/ping")
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.toLowerCase() !== "pong") {
          this.setState({api: config.externalApi});
        }
      })
      .catch((error) => {
        console.error(error);
        this.props.onError(error);
      });
  }

  componentDidMount() {
    this.getEndpoint();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <NamedSwitch name='Family Room' deviceId={0} api={this.state.api} />
        <NamedSwitch name='Living Room Lamp' deviceId={1} api={this.state.api} />
        <NamedSwitch name='Family Room Lamp 2' deviceId={2} api={this.state.api} />
        <NamedSwitch name='Cabinet' deviceId={4} api={this.state.api} />
        <NamedSwitch name='Bedroom Lamp' deviceId={5} api={this.state.api} />
        <NamedSwitch name='Dining Room Table' deviceId={0} type='wemo' api={this.state.api} />
        <NamedSwitch name='Garage Door' deviceId={1} type='garage' api={this.state.api} />
      </View>
    );
  }
}
