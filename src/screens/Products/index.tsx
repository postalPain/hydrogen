import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { useSelector, useDispatch } from 'react-redux';

import { ProjectThemeType } from 'styles/theme';
import { categoriesSelector, categoriesLoadingSelector } from 'store/categories/selectors';
import { CategoriesTabNavigation } from 'components';
import useStyles from './styles';
import { getCategories } from 'store/categories/actions';


interface IProductsProps {
  theme: ProjectThemeType;
  route: any;
}

const ProductsScreen: React.FC<IProductsProps> = ({ theme, route }) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const categories = useSelector(categoriesSelector);
  const categoriesLoading = useSelector(categoriesLoadingSelector);

  useEffect(() => {
    if (!categories && !categoriesLoading) {
      dispatch(getCategories());
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CategoriesTabNavigation
        loading={categoriesLoading}
        categories={categories}
        initialCategory={route.params.categoryId}
      />
    </SafeAreaView>
  );
};

export default withTheme(ProductsScreen);
