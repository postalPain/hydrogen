import { RootState } from 'store/rootReducer';

export const searchResultSelector = (state: RootState) => state.search.searchResult;
export const searchLoadingSelector = (state: RootState) => state.search.loading;
export const searchErrorSelector = (state: RootState) => state.search.error;
export const searchLastPageSelector = (state: RootState) => state.search.lastPage;
