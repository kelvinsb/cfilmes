import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Tabs } from './components/Config/Router';

export default class App extends Component<{}> {
  render() {
    return (
      <Tabs />
    );
  }
}
