import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeContextProvider } from '@stryberventures/stryber-react-native-ui-components';

import store from 'store';
import theme from 'styles/theme';
import Navigation from 'navigation/Navigation';
import { WorkingHoursProvider } from 'components';


export const App = () => (
  <Provider store={store}>
    <ThemeContextProvider themes={[theme]}>
      <WorkingHoursProvider>
        <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
        <Navigation />
      </WorkingHoursProvider>
    </ThemeContextProvider>
  </Provider>
);
export default App;
