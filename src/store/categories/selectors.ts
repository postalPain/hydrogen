import { RootState } from 'store/rootReducer';

export const categoriesSelector = (state: RootState) => state.categories.data;
export const categoriesLoadingSelector = (state: RootState) => state.categories.loading;
