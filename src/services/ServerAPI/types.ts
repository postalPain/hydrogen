export type TCategory = {
  uuid: string;
  name: string;
  slug: string;
  image_url: string;
  subcategories: [any];
};

export interface ICategories {
  data: TCategory[]
}
