import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';


/** Store initial state */
const INITIAL_STATE: any = {};

const sagaMiddleware = createSagaMiddleware();

/** Creating Redux store */
const store = createStore(
  rootReducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(
    sagaMiddleware,
  )),
);

sagaMiddleware.run(rootSaga);

export const getState = () => store.getState();

export default store;
