/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import {name as appName} from './app.json';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './src/redux/reducer/rootReducer';

const middleware = [thunk];

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

export default store;

const RNRedux = () => {
  return (
    <Provider store = { store }>
      <App />
    </Provider>
  )
}
AppRegistry.registerComponent(appName, () => RNRedux);
