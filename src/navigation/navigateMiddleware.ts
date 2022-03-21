import Routes from './Routes';
import { deliveryAddressSelector } from 'store/user/selectors';
import { getState } from 'store';

export default (name, params): [string, any] => {
  const state = getState();

  switch (name) {
    case Routes.Checkout: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      const { latitude, longitude, type, full_address } = deliveryAddressSelector(state);
      return type
        ? [name, params]
        : [
          Routes.ConfirmAddress,
          {
            ...params,
            nextScreen: Routes.Checkout,
            address: full_address,
            geoCoords: { latitude, longitude },
          },
        ];
    }
    default:
      return [name, params];
  }
};
