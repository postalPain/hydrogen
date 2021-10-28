import { combineReducers } from 'redux';

import userReducers from './user/reducers';
import categoriesReducers from './categories/reducers';
import productsReducers from './products/reducers';
import appReducers from './app/reducers';

/** Creating Redux store */
const rootReducer = combineReducers({
  app: appReducers,
  user: userReducers,
  categories: categoriesReducers,
  products: productsReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
