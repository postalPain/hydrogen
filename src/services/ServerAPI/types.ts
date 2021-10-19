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
