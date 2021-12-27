import { IWarehouse, WarehouseActionTypes } from 'store/warehouse/actions/types';

export const getClosestWarehouse = () => ({
  type: WarehouseActionTypes.GET_CLOSEST_WAREHOUSE,
});

export const getClosestWarehouseSuccess = (warehouse: IWarehouse) => ({
  type: WarehouseActionTypes.GET_CLOSEST_WAREHOUSE_SUCCESS,
  payload: warehouse,
});

export const getClosestWarehouseError = (error: string) => ({
  type: WarehouseActionTypes.GET_CLOSEST_WAREHOUSE_ERROR,
  payload: error,
});
