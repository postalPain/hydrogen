import { combineReducers } from 'redux';

import userReducers from './user/reducers';
import categoriesReducers from './categories/reducers';
import productsReducers from './products/reducers';
import appReducers from './app/reducers';
import searchReducer from './search/reducers';
import warehouseReducer from './warehouse/reducers';

/** Creating Redux store */
const rootReducer = combineReducers({
  app: appReducers,
  user: userReducers,
  categories: categoriesReducers,
  products: productsReducers,
  search: searchReducer,
  warehouse: warehouseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
