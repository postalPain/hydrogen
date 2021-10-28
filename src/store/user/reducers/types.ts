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

export interface IOrder {
  comment: string;
  created_at: string;
  delivery_address: IDeliveryAddress;
  delivery_fee: number;
  delivery_name: IDeliveryName;
  products: any[];
  promo_codes: any[]
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
