import { RootState } from 'store/rootReducer';

export const categoriesSelector = (state: RootState) => state.categories.data;
