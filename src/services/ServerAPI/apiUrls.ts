export default {
  getUser: 'api/v1/user',
  signIn: 'api/v1/login',
  signOut: 'api/v1/logout',
  getCategories: 'api/v1/categories?perPage=100',
  getProductsByCategory: id => `api/v1/categories/${id}/inventory`,
  cards: 'api/v1/cards',
  setDefaultCard: (id) => `api/v1/cards/${id}/default`,
  deliveryAddress: 'api/v1/user/delivery-address',
  signUp: 'api/v1/sign-up',
  orders: 'api/v1/orders?perPage=100',
  createOrder: 'api/v1/orders',
  checkPromoCode: ({ code, subtotal }) => `api/v1/promo-codes/${code}?sub_total=${subtotal}`,
  createTemporaryUser: 'api/v1/user/guest',
  resetPassword: 'api/v1/mail-reset-password',
  updatePassword: 'api/v1/reset-password',
  closestWarehouse: 'api/v1/warehouses/closest',
  search: (searchText: string, page: number) => `api/v1/inventories?perPage=20&search=${searchText}&page=${page}`,
  warehouseWorkingHours: (id: string) => `api/v1/warehouses/${id}/schedule`,
  updateFCMToken: 'api/v1/user/device-key',
};
