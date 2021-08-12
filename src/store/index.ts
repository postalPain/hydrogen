import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import userWatcher from './user/sagas';
import userReducers from './user/reducers';

/** Store initial state */
const INITIAL_STATE: any = {};

const sagaMiddleware = createSagaMiddleware();

/** Creating Redux store */
const store = createStore(
  combineReducers({
    user: userReducers
  }),
  INITIAL_STATE,
    composeWithDevTools(applyMiddleware(
    sagaMiddleware
  ))
);

sagaMiddleware.run(userWatcher);

export const getState = () => store.getState();

export default store;
