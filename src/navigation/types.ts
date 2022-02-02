import { DrawerNavigationParamList } from 'navigation/DrowerNavigation';
import { IOrder } from 'store/user/reducers/types';
import Routes from 'navigation/Routes';
import { NavigatorScreenParams } from '@react-navigation/native';

export type RootStackParamList = {
  [Routes.MapScreen]: { changeAddress: boolean } | undefined;
  [Routes.SignUp]: undefined;
  [Routes.CreatePassword]: undefined;
  [Routes.ConfirmAddress]: {
    address: string;
    geoCoords: { latitude: number; longitude: number; };
    changeAddress?: boolean;
  };
  [Routes.Checkout]: undefined;
  [Routes.Onboard]: undefined;
  [Routes.Login]: undefined;
  [Routes.Basket]: { updated: boolean } | undefined;
  [Routes.OrderConfirmation]: undefined;
  [Routes.ResetPassword]: undefined;
  [Routes.CheckEmail]: undefined;
  [Routes.UpdatePassword]: { token: string; email: string };
  [Routes.ResetPasswordSuccess]: undefined;
  [Routes.DrawerNavigation]: NavigatorScreenParams<DrawerNavigationParamList>;
  [Routes.OrderList]: undefined;
  [Routes.OrderDetails]: { order: IOrder };
  [Routes.Search]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
