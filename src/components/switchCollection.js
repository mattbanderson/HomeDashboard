import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import NamedSwitch from './namedSwitch';
import config from '../config/config';

export default class SwitchCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api: config.internalApi,
      devices: []
    };
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error('Unable to connect. Are you on home WiFi?');
    }
    return response.json();
  }

  getDevices() {
    fetch(this.state.api + "/api/devices")
      .then(this.handleErrors)
      .then((responseJson) => {
        this.setState({devices: responseJson});
      })
      .catch((error) => {
        console.log(error);
        this.props.onError(error.message);
      });
  }

  componentDidMount() {
    this.getDevices();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        { this.state.devices.map(d =>
          <NamedSwitch
            key={d.name}
            name={d.name}
            type={d.type}
            endpoint={this.state.api + d.route}
          />) }
      </View>
    );
  }
}
