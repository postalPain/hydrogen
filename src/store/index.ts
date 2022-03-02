import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


/** Store initial state */
const INITIAL_STATE: any = {};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware,
];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

/** Creating Redux store */
const store = createStore(
  rootReducer,
  INITIAL_STATE,
  applyMiddleware(
    ...middlewares,
  ),
);

sagaMiddleware.run(rootSaga);

export const getState = () => store.getState();
export const { dispatch } = store;

export default store;
