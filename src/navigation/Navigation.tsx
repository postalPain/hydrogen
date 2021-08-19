import React, { useEffect } from 'react';
import { Platform, BackHandler } from 'react-native';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { enableES5 } from 'immer';
import SplashScreen from 'react-native-splash-screen';


import Home from 'screens/Home';
import Map from 'screens/Map';
import Routes from './Routes';

import {
  navigationRef,
  isMountedRef,
  hardwareBackPressHandler,
  onStateChangeHandler,
} from './NavigationUtilities';

const Stack = createStackNavigator();

const Navigation = () => {
  useEffect(() => {
    // android specific functionality
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', hardwareBackPressHandler);
      enableES5();
    }
    // isMountedRef necessary for NavigationUtils.navigate() function
    isMountedRef.current = true;

    // Hide native splashscreen
    SplashScreen.hide();

    return () => {
      isMountedRef.current = false;
      BackHandler.removeEventListener('hardwareBackPress', hardwareBackPressHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <NavigationContainer
        ref={navigationRef}
        onStateChange={onStateChangeHandler}
      >
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name={Routes.HomeScreen}
            component={Home}
            options={{
              gestureEnabled: false,
            }}
          />
          <Stack.Screen
            name={Routes.MapScreen}
            component={Map}
            options={{
              gestureEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
