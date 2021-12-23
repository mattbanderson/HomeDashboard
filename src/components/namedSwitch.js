import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default class NamedSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
      disabled: false
    };
  }

  handleErrors(name, response) {
    if (!response.ok) {
      let errMsg = '';
      switch(response.status) {
        case 404:
            errMsg = name + ' not found.';
            break;
        case 500:
            errMsg = 'An unexpected error occurred.';
            break;
        default:
            errMsg = 'An unknown error occurred.';
      }
      throw Error(errMsg);
    }
    return response.json();
  }

  flip() {
    this.setState({disabled: true});
    const url = this.props.endpoint;
    fetch(url, { method: 'POST' })
      .then(this.handleErrors.bind(null, this.props.name))
      .then(() => {
        this.setState({on: !this.state.on});
        this.setState({disabled: false});
      })
      .catch((error) => {
        console.log(error);
        this.props.onError(error.message);
        this.setState({disabled: false})
      });
  }

  fetchStatus() {
    const url = this.props.endpoint;
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
        const errMsg = error.message + ": " + this.props.name
        console.log(errMsg);
        this.props.onError(errMsg);
      });
  }

  componentDidMount() {
    this.fetchStatus();
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
            onValueChange={() => this.flip()}
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
