import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from 'navigation/Routes';
import Home from 'screens/Home';
import Products from 'screens/Products';
import { TabWrapper } from 'components';

const Stack = createStackNavigator();
const WrappedHome = TabWrapper(Home);
const WrappedProducts = TabWrapper(Products);

const HomeTabNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={Routes.HomeScreen}
      component={WrappedHome}
      options={{
        gestureEnabled: false,
      }}
    />
    <Stack.Screen
      name={Routes.ProductsScreen}
      component={WrappedProducts}
      options={{
        gestureEnabled: false,
      }}
    />
  </Stack.Navigator>
);

export default HomeTabNavigation;
