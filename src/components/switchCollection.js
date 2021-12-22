import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import NamedSwitch from './namedSwitch';
import config from '../config/config';

export default class SwitchCollection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api: config.internalApi,
      devices: [],
      refreshKey: 0
    };
  }

  handleErrors(response) {
    if (!response.ok) {
      throw Error('Unable to connect. Are you on home WiFi?');
    }
    return response.json();
  }

  getDevices(url) {
    fetch(url)
      .then(this.handleErrors)
      .then((responseJson) => {
        this.setState({devices: responseJson});
      })
      .catch((error) => {
        console.log(error);
        this.props.onError(error.message);
      });
  }

  refresh() {
    this.setState({refreshKey:  this.state.refreshKey + 1});
  }

  componentDidMount() {
    this.getDevices(this.state.api + '/api/devices');
  }

  componentDidUpdate(nextProps) {
    if (nextProps.location !== this.props.location) {
      const nextApi = nextProps.location === 'Home' ? config.internalApi : config.externalApi
      this.setState({api: nextApi});
      this.getDevices(nextApi + '/api/devices');
    }
  }

  render() {
    let apiText;
    if (this.props.showApi) {
      apiText = (
        <Text style={{textAlign: 'center'}}>
          {this.state.api}
        </Text>
      )
    }
    return (
      <View style={styles.margin}>
        {
          this.state.devices.map(d =>
            <NamedSwitch
              key={d.name + this.state.refreshKey}
              name={d.name}
              type={d.type}
              endpoint={this.state.api + d.route}
              onError={this.props.onError}
            />)
        }
        <View style={styles.refresh}>
          <Button 
            onPress={this.refresh.bind(this)}
            title='Refresh'
          />
        </View>
        {apiText}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    flex: 1
  },
  refresh: {
    paddingTop: 10,
    paddingBottom: 10
  },
});