import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from 'navigation';
import TabNavigation, { TabNavigationParamList } from 'navigation/TabNavigation';
import { DrawerContent } from 'components';
import { NavigatorScreenParams } from '@react-navigation/native';


export type DrawerNavigationParamList = {
  [Routes.TabNavigation]: NavigatorScreenParams<TabNavigationParamList>;
};

const Drawer = createDrawerNavigator<DrawerNavigationParamList>();

const DrawerNavigation = () => (
  <Drawer.Navigator
    drawerContent={(props) => <DrawerContent {...props} />}
    screenOptions={{
      drawerPosition: 'right',
      headerShown: false,
      drawerType: 'front',
    }}
  >
    <Drawer.Screen name={Routes.TabNavigation} component={TabNavigation} />
  </Drawer.Navigator>
);

export default DrawerNavigation;
