import React, { useState, useMemo, useEffect } from 'react';
import {
  View,
  useWindowDimensions,
} from 'react-native';
import {
  withTheme, TabView, SceneMap, TabBar,
} from '@stryberventures/stryber-react-native-ui-components';
import { useDispatch } from 'react-redux';

import { ProjectThemeType } from 'styles/theme';
import { setCurrentSubcategory } from 'store/categories/actions';
import { TCategory } from 'services/ServerAPI/types';
import { SubcategoryTab } from 'components';
import useStyles from './styles';


interface ICategoryTabProps {
  theme?: ProjectThemeType;
  data: TCategory;
  isActive?: boolean;
}

const getSubcategoriesRoutesFromList = (subcategories) => subcategories.map((item) => ({
  key: item.slug,
  title: item.name,
  data: item,
}));

const CategoryTab: React.FC<ICategoryTabProps> = ({ theme, data, isActive }) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const windowDimensions = useWindowDimensions();
  const [subcategoriesNavState, setSubcategoriesNavState] = useState({
    index: 0,
    routes: getSubcategoriesRoutesFromList(data.subcategories),
  });

  const handleSubCategoriesNavIndexChange = (index) => {
    setSubcategoriesNavState({
      ...subcategoriesNavState,
      index,
    });
    dispatch(setCurrentSubcategory(subcategoriesNavState.routes[index].data.uuid));
  };

  const renderSubcategoryScene = () => {
    const sceneStack = subcategoriesNavState.routes.reduce((stack, route) => {
      const SceneComponent = () => (
        <SubcategoryTab data={route.data} />
      );
      return ({
        ...stack,
        [route.key]: SceneComponent,
      });
    }, {});

    return SceneMap(sceneStack);
  };
  const sceneMap = useMemo(renderSubcategoryScene, [subcategoriesNavState.routes]);

  useEffect(() => {
    setSubcategoriesNavState({
      index: 0,
      routes: getSubcategoriesRoutesFromList(data.subcategories),
    });
  }, [data]);
  useEffect(() => {
    if (isActive) {
      setSubcategoriesNavState({
        ...subcategoriesNavState,
        index: 0,
      });
      dispatch(setCurrentSubcategory(data.subcategories[0].uuid));
    }
  }, [isActive]);

  return (
    <View
      style={[
        styles.container,
        isActive ? styles.containerActive : {},
      ]}
    >
      <TabView
        navigationState={subcategoriesNavState}
        renderScene={sceneMap}
        onIndexChange={handleSubCategoriesNavIndexChange}
        initialLayout={{ width: windowDimensions.width }}
        style={styles.container}
        renderTabBar={props => (
          <TabBar
            scrollEnabled
            {...props}
            style={styles.tabBar}
            tabStyle={styles.tabBarTab}
            labelStyle={styles.tabBarLabel}
            activeLabelStyle={styles.tabBarLabelActive}
            renderIndicator={() => null}
            contentContainerOffset={13}
          />
        )}
      />
    </View>
  );
};

export default withTheme(CategoryTab);
