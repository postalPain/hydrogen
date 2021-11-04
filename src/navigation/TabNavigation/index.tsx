import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BASKET_TAB_NAME } from 'constants/';
import Routes from 'navigation/Routes';
import SignUp from 'screens/SignUp';
import HomeTabNavigation from '../HomeTabNavigation';
import { Home as HomeIcon, Search, Checkout } from 'components/Icons';
import { TabBar, TabWrapper } from 'components';

const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator
    tabBar={(props) => <TabBar {...props} />}
    screenOptions={{
      tabBarShowLabel: false,
      headerShown: false,
    }}
  >
    <Tab.Screen
      name={Routes.HomeTabScreen}
      // To make tab bar transparent we apply to it position absolute
      // TabWrapper adds View wrapper with padding bottom = TabBar
      component={HomeTabNavigation}
      options={{
        tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
      }}
    />
    <Tab.Screen
      name={Routes.SignUp}
      component={TabWrapper(SignUp)}
      options={{ tabBarIcon: ({ color }) => <Search fill={color} /> }}
    />
    <Tab.Screen
      name={BASKET_TAB_NAME}
      component={() => null}
      options={{ tabBarIcon: ({ color }) => <Checkout fill={color} /> }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
