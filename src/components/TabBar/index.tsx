import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { useDispatch } from 'react-redux';

import { setBasketVisibility } from 'store/app/actions';
import { NavBackground, NavSide } from 'components/Icons';
import { BasketBadge } from 'components';
import Routes from 'navigation/Routes';
import useStyles from './styles';

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const onTabPress = (e, { route, isFocused }) => {
    if (route.name === Routes.Basket) {
      e.preventDefault();
      dispatch(setBasketVisibility(true));
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
    if (route === Routes.Basket) {
      e.preventDefault();
      dispatch(setBasketVisibility(true));
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
                { route.name === Routes.Basket && <BasketBadge />}
                {icon({
                  focused: isFocused,
                  size: 25,
                  color: 'transparent',
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
