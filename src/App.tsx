import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { ThemeContextProvider } from '@stryberventures/stryber-react-native-ui-components';

import store from 'store';
import theme from 'styles/theme';
import Navigation from 'navigation/Navigation';


export const App = () => (
  <Provider store={store}>
    <ThemeContextProvider themes={[theme]}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <Navigation />
    </ThemeContextProvider>
  </Provider>
);
export default App;
