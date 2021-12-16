import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import {
  withTheme,
  Text,
} from '@stryberventures/stryber-react-native-ui-components';

import { ProjectThemeType } from 'styles/theme';
import useStyles from './styles';


type TMenuItem = {
  id: string;
  title: string;
};
interface ITabMenuProps {
  theme?: ProjectThemeType;
  menuItems: TMenuItem[];
  onPress: (index: number, menuItem: TMenuItem, externally: boolean) => void;
  tabStyle?: any;
  tabTextStyle?: any;
  tabActiveStyle?: any;
  tabTextActiveStyle?: any;
  containerStyle?: any;
  rulerOffset?: number;
  activeTabIndex?: number;
}

const TabMenu: React.FC<ITabMenuProps> = ({
  theme,
  menuItems,
  onPress: onMenuItemPressCallback,
  tabStyle,
  tabTextStyle,
  tabActiveStyle,
  tabTextActiveStyle,
  containerStyle,
  rulerOffset = 0,
  activeTabIndex = 0,
}) => {
  const styles = useStyles(theme);
  const tabsWidth = useRef([]).current;
  const rulerRef = useRef();
  const [currentTabIndex, setCurrentTabIndex] = useState(activeTabIndex);
  const isTabsFirstLayoutFinished = useRef(false);

  const setCurrentMenuItemPosition = (index) => {
    if (tabsWidth.filter((item) => item).length === menuItems.length) {
      const shiftSize = tabsWidth.slice(0, index).reduce((sum, item) => (
        sum + item
      ), 0);
      if (rulerRef.current) {
        // @ts-ignore
        rulerRef.current.scrollTo({
          x: Math.ceil(shiftSize),
          y: 0,
        });
      }
    }
  };
  const handleMenuItemOnLayout = (e, index: number) => {
    if (e.nativeEvent.layout.width) {
      tabsWidth[index] = e.nativeEvent.layout.width + 0;
    }
    // filter tabsWidth array because onLayout happens not in order
    if (!isTabsFirstLayoutFinished.current && tabsWidth.filter(
      (item) => item,
    ).length === menuItems.length) {
      isTabsFirstLayoutFinished.current = true;
      setCurrentMenuItemPosition(currentTabIndex);
    }
  };

  const onMenuItemPress = (index, externally: boolean = false) => {
    setCurrentTabIndex(index);
    setCurrentMenuItemPosition(index);
    onMenuItemPressCallback(index, menuItems[index], externally);
  };

  useEffect(() => {
    onMenuItemPress(activeTabIndex, true);
  }, [activeTabIndex]);

  return (
    <View style={[styles.container, containerStyle]}>
      <ScrollView
        style={styles.rulerWrapper}
        horizontal
        showsHorizontalScrollIndicator={false}
        ref={rulerRef}
      >
        <View
          style={[
            styles.ruler,
            {
              marginHorizontal: rulerOffset,
            },
          ]}
        >
          {menuItems.map((menuItem, index) => {
            const isActive = index === currentTabIndex;
            return (
              <View
                key={menuItem.id}
                style={styles.menuItemContainer}
                onLayout={(e) => handleMenuItemOnLayout(e, index)}
              >
                <TouchableOpacity
                  style={[
                    styles.menuItem,
                    isActive ? styles.menuItemActive : {},
                    tabStyle,
                    isActive ? tabActiveStyle : {},
                  ]}
                  onPress={() => onMenuItemPress(index)}
                >
                  <Text
                    style={[
                      styles.menuItemText,
                      isActive ? styles.menuItemTextActive : {},
                      tabTextStyle,
                      isActive ? tabTextActiveStyle : {},
                    ]}
                  >
                    {menuItem.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default withTheme(TabMenu);
