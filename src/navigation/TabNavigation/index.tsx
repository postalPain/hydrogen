import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BASKET_TAB_NAME } from 'constants/';
import Routes from 'navigation/Routes';
import SearchScreen from 'screens/Search';
import { TabBar, TabWrapper } from 'components';
import { Home as HomeIcon, Search, Checkout } from 'components/Icons';
import HomeTabNavigation from '../HomeTabNavigation';
import { trackEvent, TrackingEvent } from 'utilities/eventTracking';

const Tab = createBottomTabNavigator();
const NullComponent = () => null;
const WrappedSearchScreen = TabWrapper(SearchScreen);

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
      name={Routes.Search}
      component={WrappedSearchScreen}
      options={{ tabBarIcon: ({ color }) => <Search fill={color} /> }}
      listeners={() => ({
        tabPress: () => {
          trackEvent(TrackingEvent.SearchCLicked);
        },
      })}
    />
    <Tab.Screen
      name={BASKET_TAB_NAME}
      component={NullComponent}
      options={{ tabBarIcon: ({ color }) => <Checkout fill={color} /> }}
    />
  </Tab.Navigator>
);

export default TabNavigation;
