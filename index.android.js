import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

import App from './components/App'

export default class chat extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('chat', () => chat);
