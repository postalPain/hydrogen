import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Routes } from 'navigation';
import TabNavigation from 'navigation/TabNavigation';
import { DrawerContent } from 'components';

const Drawer = createDrawerNavigator();

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
