import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  withTheme, Text,
} from '@stryberventures/stryber-react-native-ui-components';
import { useDispatch, useSelector } from 'react-redux';

import i18n from 'i18n';
import { ProjectThemeType } from 'styles/theme';
import { TCategory, TProduct } from 'services/ServerAPI/types';
import { getProductsBySubcategory } from 'store/products/actions';
import { productsByCategoryIdSelector, productsLoadingSelector, isActiveSubCategory } from 'store/products/selectors';
import { ProductItem, ProductSlideUp } from 'components';
import useStyles from './styles';


interface ISubcategoryTabProps {
  theme?: ProjectThemeType;
  data: TCategory;
}

const SubcategoryTab: React.FC<ISubcategoryTabProps> = ({ theme, data }) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const [productSlideUpVisible, setProductSlideUpVisible] = useState(false);
  const [currentProductData, setCurrentProductData]: [TProduct, any] = useState(null);
  const products = useSelector(productsByCategoryIdSelector(data.uuid));
  const productsLoading = useSelector(productsLoadingSelector(data.uuid));
  const isActive = useSelector(isActiveSubCategory(data.uuid));

  const onProductShow = (p: TProduct) => {
    setCurrentProductData(p);
    setProductSlideUpVisible(true);
  };
  const onProductHide = () => {
    setProductSlideUpVisible(false);
    setCurrentProductData(null);
  };

  useEffect(() => {
    if (!products && !productsLoading && isActive) {
      dispatch(getProductsBySubcategory(data.uuid));
    }
  }, [isActive]);

  return (
    <>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{data.name}</Text>
        {productsLoading && (
          <View style={styles.messageBox}>
            <Text>{i18n.t('components.subcategoryTab.loading')}</Text>
          </View>
        )}
        {!!(products && !products.length) && (
          <View style={styles.messageBox}>
            <Text>{i18n.t('components.subcategoryTab.emptyList')}</Text>
          </View>
        )}
        <View style={styles.boxProductItems}>
          { !!(products && products.length) && products.map((product) => (
            <ProductItem
              key={product.uuid}
              data={product}
              onPress={() => onProductShow(product)}
            />
          ))}
        </View>
      </ScrollView>
      { currentProductData && (
        <ProductSlideUp
          visible={productSlideUpVisible}
          onClose={onProductHide}
          data={currentProductData}
        />
      )}
    </>
  );
};

export default withTheme(SubcategoryTab);
