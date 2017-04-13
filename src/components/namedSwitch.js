import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import ReactMixin from 'react-mixin';
import TimerMixin from 'react-timer-mixin';
import config from '../config/config';

export default class NamedSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      disabled: false
    };
    const baseUrl = this.props.api;
    if (this.props.type && this.props.type.toLowerCase() === 'wemo') {
      this.endpoint = baseUrl + '/wemo';
    } else if (this.props.type && this.props.type.toLowerCase() === 'garage') {
      this.endpoint = baseUrl + '/garage/door';
    } else {
      this.endpoint = baseUrl + '/ecoplug';
    }
  }

  flip() {
    this.setState({disabled: true});
    const url = this.endpoint + '/' + this.props.deviceId;
    fetch(url, { method: 'POST' })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({on: !this.state.on});
        if (this.props.type && this.props.type.toLowerCase() === 'garage') {
          this.setTimeout(() => {this.setState({disabled: false})}, config.garageWaitTime);
        } else {
          this.setState({disabled: false});
        }
      })
      .catch((error) => {
        console.error(error);
        this.props.onError(error);
        this.setState({disabled: false})
      });
  }

  fetchStatus() {
    const url = this.endpoint + "/" + this.props.deviceId;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        if (this.props.type && this.props.type.toLowerCase() === 'garage') {
          this.setState({on: responseJson === 1});
        } else {
          this.setState({on: responseJson === "ON"});
        }
      })
      .catch((error) => {
        console.error(error);
        this.props.onError(error);
      });
  }

  componentDidMount() {
    this.fetchStatus();
    this.setInterval(this.fetchStatus, config.statusCheckInterval);
  }

  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <View style={styles.margin} />
        <View style={styles.name}>
          <Text>
            {this.props.name}
          </Text>
        </View>
        <View style={styles.switchBtn}>
          <Switch
            onValueChange={value => this.flip()}
            value={this.state.on}
            disabled={this.state.disabled}
          />
        </View>
        <View style={styles.margin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  margin: {
    flex: 1
  },
  name: {
    flex: 4
  },
  switchBtn: {
    flex: 2,
    marginBottom: 15
  },
});

ReactMixin(NamedSwitch.prototype, TimerMixin);
