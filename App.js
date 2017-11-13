import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';

import reducers from './components/reducers';
import LoginRouter from './components/Config/LoginRouter';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyASyIMI63xCVsoF8BlwiA-A-ygWi6Y1GXw",
      authDomain: "cfilmes-c4c3a.firebaseapp.com",
      databaseURL: "https://cfilmes-c4c3a.firebaseio.com",
      storageBucket: "cfilmes-c4c3a.appspot.com",
      messagingSenderId: "360171182494"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={store}>
        <LoginRouter />
      </Provider>
    );
  }
}

export default App;