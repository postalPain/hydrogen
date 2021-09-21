import { TProduct } from 'services/ServerAPI/types';

export interface IProductsState {
  [uuid: string]: {
    data: TProduct[] | null;
    loading: boolean;
    error: string | null;
  }
}
