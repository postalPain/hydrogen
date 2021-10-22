import { combineReducers } from 'redux';

import userReducers from './user/reducers';
import categoriesReducers from './categories/reducers';
import productsReducers from './products/reducers';

/** Creating Redux store */
const rootReducer = combineReducers({
  user: userReducers,
  categories: categoriesReducers,
  products: productsReducers,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
