import { ISubcategoryProducts } from 'services/ServerAPI/types';

export interface IProductsState {
  [uuid: string]: {
    data: ISubcategoryProducts[] | null;
    loading: boolean;
    error: string | null;
  }
}
