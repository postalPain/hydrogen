import { RootState } from 'store/rootReducer';

export const productsSelector = (id: string) => (state: RootState) => (
  state.products[id] && state.products[id].data || null
);
export const productsLoadingSelector = (id: string) => (state: RootState) => (
  state.products[id] && state.products[id].loading
);
export const isActiveSubCategory = (id: string) => (state:RootState) => (
  state.categories.currentSubcategory === id
);
