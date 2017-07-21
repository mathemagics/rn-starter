'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import logger from 'redux-logger';

import { Text } from 'react-native';

// Reducers
import mainReducer from './MainDuck';
import Main from 'main/containers/mainContainer';

// Middleware
const middleware = () => {
  return applyMiddleWare(logger);
};

const store = createStore(combineReducers({ main: mainReducer }))

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}