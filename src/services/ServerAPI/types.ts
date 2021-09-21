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
  name: string;
  description: string | null;
  origin: any | null;
  weight: number | null;
  price: number;
  max_per_order: number;
  image_url: string;
  milliliters: number | null;
  pieces: number | null;
  created_at: string;
  updated_at: string;
  subcategories: string[] | null;
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
