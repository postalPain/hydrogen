export enum WarehouseActionTypes {
  GET_CLOSEST_WAREHOUSE = 'GET_CLOSEST_WAREHOUSE',
  GET_CLOSEST_WAREHOUSE_SUCCESS = 'GET_CLOSEST_WAREHOUSE_SUCCESS',
  GET_CLOSEST_WAREHOUSE_ERROR = 'GET_CLOSEST_WAREHOUSE_ERROR',
}

export interface IWarehouse {
  uuid: string;
  name: string;
  latitude: string;
  longitude: string;
  working_hours_start: string;
  working_hours_end: string;
  works_now: boolean;
  created_at: string;
  updated_at: string;
}
