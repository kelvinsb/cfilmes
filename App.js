import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <Login/>
    );
  }
}
