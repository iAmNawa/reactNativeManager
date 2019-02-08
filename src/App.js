import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import secrets from './secrets';

export default class HelloWorldApp extends Component {
  componentWillMount() {
    firebase.initializeApp(secrets);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: 'white' }}>
          <Text>Hello world!</Text>
        </View>
      </Provider>
    );
  }
}
