import React, { Component } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default class NamedSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
    this.endpoint = 'http://192.168.0.186:8080/api/ecoplug';
  }

  flip() {
    const url = this.endpoint + '/' + this.props.plugId;
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
    const url = this.endpoint + "/" + this.props.plugId;
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
