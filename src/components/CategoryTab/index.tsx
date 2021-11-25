import React, { useState } from 'react';
import { View } from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';

import { ProjectThemeType } from 'styles/theme';
import { TCategory } from 'services/ServerAPI/types';
import { SubcategoryTab, TabMenu } from 'components';
import useStyles from './styles';


interface ICategoryTabProps {
  theme?: ProjectThemeType;
  data: TCategory;
}

const CategoryTab: React.FC<ICategoryTabProps> = ({ theme, data }) => {
  const styles = useStyles(theme);
  const [currentSubcategoryIndex, setCurrentSubcategoryIndex] = useState(0);

  const onMenuItemPress = (index) => {
    setCurrentSubcategoryIndex(index);
  };
  const menuItems = data.subcategories.map(subcategory => ({
    id: subcategory.uuid,
    title: subcategory.name,
  }));

  const currentSubcategory = data.subcategories[currentSubcategoryIndex];

  return (
    <View style={styles.container}>
      <TabMenu
        menuItems={menuItems}
        onPress={onMenuItemPress}
        rulerOffset={13}
        tabStyle={styles.tabBarTab}
        tabTextStyle={styles.tabBarLabel}
        tabTextActiveStyle={styles.tabBarLabelActive}
        containerStyle={styles.tabBar}
      />
      <SubcategoryTab data={currentSubcategory} />
    </View>
  );
};

export default withTheme(CategoryTab);
