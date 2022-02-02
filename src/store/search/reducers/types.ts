import { TProduct } from 'services/ServerAPI/types';

export interface ISearchState {
  searchResult: TProduct[] | null;
  loading: boolean;
  error: string | null;
  lastPage: number | null;
  nextPageError: string | null;
}
