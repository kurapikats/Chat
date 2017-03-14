import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import MainScreen from './components/MainScreen'
import SignInScreen from './components/SignInScreen'

export default class chat extends Component {
  render() {
    return (
      <SignInScreen />
    );
  }
}

AppRegistry.registerComponent('chat', () => chat);
