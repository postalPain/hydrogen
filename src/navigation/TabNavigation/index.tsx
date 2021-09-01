import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from 'navigation/Routes';
import Home from 'screens/Home';
import TemporaryNavigator from 'screens/TemporaryNavigator';
import React from 'react';
import SignUp from 'screens/SignUp';
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
      name={Routes.HomeScreen}
      // To make tab bar transparent we apply to it position absolute
      // TabWrapper adds View wrapper with padding bottom = TabBar
      component={TabWrapper(Home)}
      options={{
        tabBarIcon: () => <HomeIcon />,
      }}
    />
    <Tab.Screen
      name={Routes.SignUp}
      component={TabWrapper(SignUp)}
      options={{ tabBarIcon: () => <Search /> }}
    />
    <Tab.Screen
      name={Routes.TemporaryNavigator}
      component={TabWrapper(TemporaryNavigator)}
      options={{ tabBarIcon: () => <Checkout /> }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
