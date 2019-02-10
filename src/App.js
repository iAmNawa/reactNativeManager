import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import secrets from './secrets';
import LoginForm from './components/LoginForm';

export default class HelloWorldApp extends Component {
  componentWillMount() {
    firebase.initializeApp(secrets);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
          <LoginForm />
      </Provider>
    );
  }
}
