import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { BASKET_TAB_NAME } from 'constants/';
import { NavBackground, NavSide } from 'components/Icons';
import { BasketBadge } from 'components';
import Routes from 'navigation/Routes';
import useStyles from './styles';

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const styles = useStyles();

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
      <NavSide />
      <NavBackground style={styles.tabBarLine} />
      <NavSide style={styles.tabRightSide} />
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

export default TabBar;
