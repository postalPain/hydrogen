export interface IDeliveryName {
  first_name: string;
  last_name: string;
  phone: string;
}

export interface IDeliveryAddress {
  apartment_number: string;
  building_name: string;
  floor: number;
  full_address: string;
  house_number: string;
  latitude: string;
  longitude: string;
  type: string;
}

export interface IOrderProduct {
  milliliters: null | number;
  name: string;
  origin: string;
  pieces: null | number;
  price: number;
  quantity: number;
  total: number;
  uuid: string;
  weight: null | number;
}

interface IPromoCode {
  code: string;
  discount: number;
}

export interface IOrder {
  comment: string;
  created_at: string;
  delivery_address: IDeliveryAddress;
  delivery_fee: number;
  delivery_name: IDeliveryName;
  products: IOrderProduct[];
  promo_codes: IPromoCode[];
  status: string;
  sub_total: number;
  tax: number;
  total: number;
  uuid: string;
  warehouse: {
    uuid: string;
  }
}

export interface ICard {
  brand: string;
  created_at?: string;
  isDefault: boolean;
  last4: string;
  stripe_card_id: string;
  updated_at?: string;
  user_uuid?: string;
  uuid?: string;
  temporary?: boolean;
}
