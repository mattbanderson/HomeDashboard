import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Button
} from 'react-native';
import Header from './src/components/header';
import SwitchCollection from './src/components/switchCollection';

export default class App extends React.Component {
  state = {
    modalVisible: false,
    modalMessage: '',
    location: 'Home',
    showInfo: false
  }

  handleLocationChange() {
    this.setState({location: this.state.location === 'Home' ? 'Away' : 'Home'});
  }

  handleInfoPress() {
    this.setState({showInfo: !this.state.showInfo});
  }

  handleError(msg) {
    this.setState({modalVisible: true, modalMessage: msg});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', paddingBottom: 20}}>
          <Header
            location={this.state.location}
            onLocationChange={() => this.handleLocationChange()}
            onInfoPress={() => this.handleInfoPress()}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SwitchCollection
            ref={switches => { this.switches = switches }}
            location={this.state.location}
            onError={error => this.handleError(error)}
            showInfo={this.state.showInfo}
          />
        </View>
        <View>
          <Modal
            animationType={"fade"}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => this.setState({modalVisible: false}) }
            >
           <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
              <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
                <Text style={{fontSize: 16}}>{this.state.modalMessage}</Text>
                <Button title='Dismiss' color='lightblue' onPress={() => this.setState({modalVisible: false})}>Dismiss</Button>
              </View>
           </View>
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
