'use strict'

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import logger from 'redux-logger';

import { Text } from 'react-native';

// Reducers
import mainReducer from './MainDuck';

// Middleware
const middleware = () => {
  return applyMiddleWare(logger);
};

const store = createStore(combineReducers({ main: mainReducer }))

export default class Main extends Component {
  render() {
    return (
      <Provider store={store}>
        <Text>Hello World</Text>
      </Provider>
    );
  }
}