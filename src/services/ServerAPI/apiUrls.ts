export default {
  getUser: 'api/v1/user',
  signIn: 'api/v1/login',
  signOut: 'api/v1/logout',
  getCategories: 'api/v1/categories',
  getProductsBySubcategory: id => `api/v1/subcategories/${id}/products?per_page=100`,
};
