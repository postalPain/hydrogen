import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { TabBarBackground, TabBarSide } from 'components/Icons';
import useStyles from './styles';

const TabBar: React.FC<BottomTabBarProps> = ({ state, descriptors, navigation }) => {
  const classes = useStyles();
  return (
    <View style={classes.container}>
      <TabBarSide />
      <TabBarBackground style={classes.tabBarLine} />
      <TabBarSide style={classes.tabRightSide} />
      <View style={classes.iconsWrapper}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const icon = options.tabBarIcon;

          const isFocused = state.index === index;

          const onPress = () => {
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

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={classes.item}
            >
              {icon({
                focused: isFocused,
                size: 25,
                color: 'transparent',
              })}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;
