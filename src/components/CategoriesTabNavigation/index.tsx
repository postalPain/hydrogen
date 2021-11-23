import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import {
  withTheme, TabBar, Text,
} from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { ICategoriesState } from 'store/categories/reducers/types';
import { CategoryTab } from 'components';
import { ProjectThemeType } from 'styles/theme';
import useStyles from './styles';


interface ICategoriesTabNavigationProps {
  theme?: ProjectThemeType;
  categories?: ICategoriesState['data'];
  initialCategory?: string;
  loading?: boolean;
}

const getCategoriesRoutesFromList = (categories) => categories.map((item) => ({
  key: item.slug,
  title: item.name,
  data: item,
}));

const CategoriesTabNavigation: React.FC<ICategoriesTabNavigationProps> = ({
  theme,
  categories,
  loading = false,
  initialCategory,
}) => {
  const styles = useStyles(theme);
  const [categoriesNavState, setCategoriesNavState] = useState({
    index: 0,
    routes: [],
  });

  useEffect(() => {
    if (categories) {
      setCategoriesNavState({
        ...categoriesNavState,
        index: categories.findIndex(category => category.uuid === initialCategory),
        routes: getCategoriesRoutesFromList(categories),
      });
    }
  }, [categories]);


  const handleCategoriesNavIndexChange = (index) => {
    setCategoriesNavState({
      ...categoriesNavState,
      index,
    });
  };

  if (loading) {
    return (
      <View style={styles.messageBox}>
        <Text>{i18n.t('components.categoriesTabNavigation.loading')}</Text>
      </View>
    );
  }

  if (!categories) {
    return (
      <View style={styles.messageBox}>
        <Text>{i18n.t('components.categoriesTabNavigation.emptyList')}</Text>
      </View>
    );
  }

  const onTabPress = (key) => {
    const index = categoriesNavState.routes.findIndex(item => item.key === key);
    handleCategoriesNavIndexChange(index);
  };

  const currentCategoryData = categories[categoriesNavState.index];
  return (
    <>
      <TabBar
        navigationState={categoriesNavState}
        scrollEnabled
        style={styles.tabBar}
        tabStyle={styles.tabBarTab}
        labelStyle={styles.tabBarLabel}
        activeLabelStyle={styles.tabBarLabelActive}
        renderIndicator={() => null}
        contentContainerOffset={13}
        jumpTo={onTabPress}
      />
      <View style={styles.categoriesBox}>
        <CategoryTab
          key={currentCategoryData.uuid}
          data={currentCategoryData}
        />
      </View>
    </>
  );
};

export default withTheme(CategoriesTabNavigation);
