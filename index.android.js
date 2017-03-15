import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from './components/App'
import chatNowReducers from './reducers'

let store = createStore(chatNowReducers)

export default class chat extends Component {
  render() {
    console.log('store', store.getState());
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

AppRegistry.registerComponent('chat', () => chat);
