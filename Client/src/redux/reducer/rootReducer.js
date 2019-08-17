import { combineReducers } from 'redux';

import initialState from '../initialState';

import reducer from './reducer';

export default combineReducers({
  viewer: reducer(initialState.viewer),
});