import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator,
  Text,
  View,
  Modal,
  Button,
  TouchableHighlight
} from 'react-native';
import Header from './src/components/header';
import SwitchCollection from './src/components/switchCollection';

export default class HomeDashboard extends Component {
  state = {
    modalVisible: false,
    modalMessage: ''
  }

  handleError(msg) {
    this.setState({modalVisible: true, modalMessage: msg});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', paddingBottom: 20}}>
          <Header onRefresh={() => this.switches.getEndpoint() } />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <SwitchCollection
            ref={switches => { this.switches = switches }}
            onError={error => this.handleError(error)}
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

AppRegistry.registerComponent('HomeDashboard', () => HomeDashboard);
