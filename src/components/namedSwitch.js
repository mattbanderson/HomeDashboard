import React, { Component } from 'react';
import { View, Text, Switch } from 'react-native';

export default class NamedSwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      on: false,
    };
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
