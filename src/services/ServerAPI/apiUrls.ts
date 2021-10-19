export default {
  getUser: 'api/v1/user',
  signIn: 'api/v1/login',
  signOut: 'api/v1/logout',
  getCategories: 'api/v1/categories?per_page=100',
  getProductsBySubcategory: id => `api/v1/subcategories/${id}/inventory?per_page=100`,
  cards: 'api/v1/cards',
  setDefaultCard: (id) => `api/v1/cards/${id}/default`,
  deliveryAddress: 'api/v1/user/delivery-address',
  signUp: 'api/v1/sign-up',
};
