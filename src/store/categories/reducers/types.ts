import { TCategory } from 'services/ServerAPI/types';

export interface ICategoriesState {
  data: TCategory[] | null;
  loading: boolean;
}
