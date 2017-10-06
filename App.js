/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.welcome}>
            Topo!
          </Text>
        </View>
        <View style={styles.recomendacoes}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
        </View>
        <View style={styles.ultimosFilmes}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
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
  topBar:
  {
    flex: 0.1,
    backgroundColor: "#CCC",
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  recomendacoes:
  {
    flex: 0.4,
    backgroundColor: "#CCF",
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  ultimosFilmes:
  {
    flex: 0.5,
    backgroundColor: "#CFF",
    alignItems: 'flex-start',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
