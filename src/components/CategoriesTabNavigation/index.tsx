import React, { useState } from 'react';
import { View } from 'react-native';
import {
  withTheme, Text,
} from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { ICategoriesState } from 'store/categories/reducers/types';
import { CategoryTab, TabMenu } from 'components';
import { ProjectThemeType } from 'styles/theme';
import useStyles from './styles';


interface ICategoriesTabNavigationProps {
  theme?: ProjectThemeType;
  categories?: ICategoriesState['data'];
  initialCategory?: string;
  loading?: boolean;
  screenFocused?: boolean;
}

const CategoriesTabNavigation: React.FC<ICategoriesTabNavigationProps> = ({
  theme,
  categories,
  loading = false,
  initialCategory,
  screenFocused = false,
}) => {
  const styles = useStyles(theme);
  const initialCategoryIndex = categories
    ? categories.findIndex(category => category.uuid === initialCategory)
    : 0;
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(initialCategoryIndex);

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

  const menuItems = categories.map((category) => ({
    id: category.uuid,
    title: category.name,
  }));
  const onTabMenuItemPress = (index) => {
    setCurrentCategoryIndex(index);
  };
  const currentCategoryData = categories[currentCategoryIndex];

  return (
    <>
      <TabMenu
        menuItems={menuItems}
        onPress={onTabMenuItemPress}
        rulerOffset={13}
        activeTabIndex={currentCategoryIndex}
      />
      <View style={styles.categoriesBox}>
        <CategoryTab
          key={currentCategoryData.uuid}
          data={currentCategoryData}
          screenFocused={screenFocused}
        />
      </View>
    </>
  );
};

export default withTheme(CategoriesTabNavigation);
