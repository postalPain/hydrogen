import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

import { ProjectThemeType } from 'styles/theme';
import { categoriesSelector, categoriesLoadingSelector } from 'store/categories/selectors';
import { CategoriesTabNavigation } from 'components';
import useStyles from './styles';
import { getCategories } from 'store/categories/actions';
import { Routes } from 'navigation';
import { HomeTabNavigationParamList } from 'navigation/HomeTabNavigation';


interface IProductsProps {
  theme: ProjectThemeType;
}

type ProductsScreenRoute = RouteProp<HomeTabNavigationParamList, Routes.ProductsScreen>;

const ProductsScreen: React.FC<IProductsProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const route = useRoute<ProductsScreenRoute>();
  const navigation = useNavigation();
  const categories = useSelector(categoriesSelector);
  const categoriesLoading = useSelector(categoriesLoadingSelector);
  const initialCategoryId = route.params && route.params.categoryId || categories[0].uuid;
  const [screenFocused, setScreenFocused] = useState(false);

  useEffect(() => {
    if (!categories && !categoriesLoading) {
      dispatch(getCategories());
    }
  }, []);

  useEffect(() => {
    const removeListenerHandlers = [
      navigation.addListener('focus', () => {
        setScreenFocused(true);
      }),
      navigation.addListener('blur', () => {
        setScreenFocused(false);
      }),
    ];
    return () => {
      removeListenerHandlers.forEach(handler => handler());
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <CategoriesTabNavigation
        loading={categoriesLoading}
        categories={categories}
        initialCategory={initialCategoryId}
        screenFocused={screenFocused}
      />
    </SafeAreaView>
  );
};

export default withTheme(ProductsScreen);
