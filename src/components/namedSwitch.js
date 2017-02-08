import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';

export default class NamedSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
  }

  componentDidMount() {
    console.log("plugId: ", this.props.plugId);
    const url = 'http://192.168.0.186:8080/api/ecoplug/' + this.props.plugId;
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
            onValueChange={(value) => this.setState({on: value})}
            style={{marginBottom: 10}}
            value={this.state.on}
          />
        </View>
      </View>
    );
  }
}
