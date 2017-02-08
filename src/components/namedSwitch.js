import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';

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
      <View>
        <View style={{flexDirection: 'row'}}>
          <Text>
            {this.props.name}
          </Text>
          <Switch
            onValueChange={value => this.flip()}
            style={{marginBottom: 10}}
            value={this.state.on}
          />
        </View>
      </View>
    );
  }
}
