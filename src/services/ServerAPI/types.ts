import { IDeliveryAddress } from 'store/user/reducers/types';

export enum EOrderStatus {
  pending = 'pending',
  packing = 'packing',
  packed = 'packed',
  delivered = 'delivered',
  cancelled = 'cancelled',
  unfulfilled = 'unfulfilled', // might be removed in the future
}
export enum EApartmentType {
  apartments = 'apartments',
  villa = 'villa',
}

export type TSubcategory = {
  uuid: string;
  name: string;
  slug: string;
};

export type TCategory = {
  uuid: string;
  name: string;
  slug: string;
  image_url: string;
  subcategories: TSubcategory[];
};

export type TProduct = {
  uuid: string;
  product_uuid: string;
  warehouse_uuid: string;
  cost: number;
  price: number;
  quantity: number;
  max_per_order: number;
  shelf_no: string;
  name: string;
  description: string | null;
  origin: any | null;
  tax: number;
  image_url: string;
  slug: string;
  weight: number | null;
  milliliters: number | null;
  pieces: number | null;
};

type TMetaList = {
  current_page: number;
  from: number;
  to: number;
  last_page: number;
  per_page: number;
  total: number;
};

export interface ICategories {
  data: TCategory[]
}

export interface IProducts {
  data: TProduct[];
  meta: TMetaList;
}

export interface IOrder {
  products: {
    uuid: string;
    quantity: number;
  }[],
  comment: string;
  delivery_address: {
    latitude: number;
    longitude: number;
    type: EApartmentType;
    building_name: string;
    house_number: string;
    floor: number;
    apartment_number: string;
    full_address: string;
  };
  promo_code?: string;
}

export type TPromoCode = {
  code: string;
  discount: number;
};

export interface IOrderCreated {
  uuid: string;
  status: EOrderStatus;
  delivery_address: {
    latitude: number;
    longitude: number;
    type: EApartmentType;
    building_name: string;
    house_number: string;
    floor: number;
    apartment_number: string;
    full_address: string;
  };
  products: TProduct[];
  total: number;
  sub_total: number;
  tax: number;
  delivery_fee: number;
  comment: string;
  created_at: string,
  delivery_name: {
    first_name: string,
    last_name: string,
    phone: string
  },
  promo_codes: TPromoCode[],
  warehouse: {
    uuid: string,
  }
}

export type TUser = {
  delivery_address: IDeliveryAddress;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
  uuid: string;
};
