import React, { Component } from 'react';
import { Text, ActivityIndicator } from 'react-native';

export default class Spinner extends Component {
    render() {
      return (
        <ActivityIndicator size='small' />
      );
    }
  }