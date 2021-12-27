import { IWarehouse } from 'store/warehouse/actions/types';

export interface IWarehouseState {
  data: IWarehouse | null;
  loading: boolean;
  error: string | null;
}
