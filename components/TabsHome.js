import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Tabs } from './Config/Router';

export default class TabsHome extends Component<{}> {
  static navigationOptions = {
    title: "Página Inicial"
  }
  render() {
    return (
      <Tabs/>
    );
  }
}
