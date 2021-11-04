import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from 'navigation/Routes';
import Home from 'screens/Home';
import Products from 'screens/Products';
import { TabWrapper } from 'components';

const Stack = createStackNavigator();

const HomeTabNavigation = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen
      name={Routes.HomeScreen}
      component={TabWrapper(Home)}
      options={{
        gestureEnabled: false,
      }}
    />
    <Stack.Screen
      name={Routes.ProductsScreen}
      component={TabWrapper(Products)}
      options={{
        gestureEnabled: false,
      }}
    />
  </Stack.Navigator>
);

export default HomeTabNavigation;
