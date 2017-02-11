import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default class NamedSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
    const baseUrl = 'http://192.168.0.186:8080/api';
    if (this.props.type && this.props.type.toLowerCase() === 'wemo') {
      this.endpoint = baseUrl + '/wemo';
    } else if (this.props.type && this.props.type.toLowerCase() === 'garage') {
      this.endpoint = baseUrl + '/garage/door';
    } else {
      this.endpoint = baseUrl + '/ecoplug';
    }
  }

  flip() {
    const url = this.endpoint + '/' + this.props.deviceId;
    fetch(url, { method: 'POST' })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({on: !this.state.on})
      })
      .catch((error) => {
        console.error(error);
      });
  }

  componentDidMount() {
    const url = this.endpoint + "/" + this.props.deviceId;
    fetch(url)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({on: responseJson === "ON"});
      })
      .catch((error) => {
        console.error(error);
      });
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
