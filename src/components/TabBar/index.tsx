import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { ProjectThemeType } from 'theme';
import { BASKET_TAB_NAME } from 'constants/';
import { NavSide } from 'components/Icons';
import { BasketBadge } from 'components';
import Routes from 'navigation/Routes';
import useStyles from './styles';

interface ITabBar {
  theme: ProjectThemeType;
}
const TabBar: React.FC<BottomTabBarProps & ITabBar> = ({
  state,
  descriptors,
  navigation,
  theme,
}) => {
  const styles = useStyles(theme);

  const onTabPress = (e, { route, isFocused }) => {
    if (route.name === BASKET_TAB_NAME) {
      e.preventDefault();
      // @ts-ignore
      navigation.navigate(Routes.Basket);
      return;
    }

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      // The `merge: true` option makes
      // sure that the params inside the tab screen are preserved
      // @ts-ignore
      navigation.navigate({
        name: route.name,
        merge: true,
      });
    }
  };

  const onTabLongPress = (e, route) => {
    if (route === BASKET_TAB_NAME) {
      e.preventDefault();
      // @ts-ignore
      navigation.navigate(Routes.Basket);
      return;
    }

    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  return (
    <View style={styles.container}>
      <NavSide style={styles.leftCorner} />
      <NavSide style={styles.rightCorner} />
      <View style={styles.iconsWrapper}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const icon = options.tabBarIcon;
          const isFocused = state.index === index;

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={(e) => onTabPress(e, { route, isFocused })}
              onLongPress={(e) => onTabLongPress(e, route)}
              style={styles.item}
            >
              <View style={styles.iconWrapper}>
                { route.name === BASKET_TAB_NAME && <BasketBadge />}
                {icon({
                  focused: isFocused,
                  size: 25,
                  color: isFocused ? '#fda717' : '#eee',
                })}
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default withTheme(TabBar);
