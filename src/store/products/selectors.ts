import { RootState } from 'store/rootReducer';

export const productsByCategoryIdSelector = (id: string) => (state: RootState) => (
  state.products[id] && state.products[id].data || null
);
export const fetchingDateCategoryProductsSelector = (id: string) => (state: RootState) => (
  state.products[id] && state.products[id].date || null
);
export const productsLoadingSelector = (id: string) => (state: RootState) => (
  state.products[id] && state.products[id].loading
);
export const productsErrorSelector = (id: string) => (state: RootState) => (
  state.products[id] && state.products[id].error
);
