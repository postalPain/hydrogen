import React from 'react';
import { View, ScrollView } from 'react-native';
import {
  Text, CacheImage, withTheme, Button,
} from '@stryberventures/stryber-react-native-ui-components';
import { useDispatch, useSelector } from 'react-redux';

import i18n from 'i18n';
import { ProjectThemeType } from 'styles/theme';
import { TProduct } from 'services/ServerAPI/types';
import {
  formatAmount,
} from 'utilities/helpers';
import { removeProductsFromBasket } from 'store/user/actions';
import { productsListSelector } from 'store/products/selectors';
import { SlideUp } from 'components';
import useStyles from './styles';


interface IOutOfStockSlideUpProps {
  theme?: ProjectThemeType;
  visible: boolean;
  onCartUpdate: () => void;
  productIds?: string[];
}

const OutOfStockSlideUp: React.FC<IOutOfStockSlideUpProps> = ({
  theme,
  visible,
  onCartUpdate,
  productIds = [],
}) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const products = useSelector(productsListSelector(productIds));
  const onUpdateCartPress = () => {
    dispatch(removeProductsFromBasket({
      uuids: productIds,
    }));
    onCartUpdate();
  };

  const renderProducts = () => (
    products.map((product: TProduct) => (
      <View style={styles.inventoryItem} key={product.uuid}>
        <View style={styles.inventoryImageContainer}>
          <CacheImage
            source={{ uri: product.image_url }}
            style={styles.inventoryImage}
          />
        </View>
        <View style={styles.inventoryContent}>
          <Text style={[styles.inventoryName, styles.p]}>
            {product.name}
          </Text>
          <Text style={[styles.inventoryText, styles.p]}>
            {`${formatAmount(product)}, ${product.origin}`}
          </Text>
        </View>
        <View style={styles.inventorySideCol}>
          <Text style={[styles.inventoryUnAvailable, styles.p]}>
            {i18n.t('components.outOfStockSlideUp.unavailable')}
          </Text>
        </View>
      </View>
    ))
  );

  return (
    <SlideUp
      visible={visible}
      disableClose
    >
      <Text style={styles.header}>{i18n.t('components.outOfStockSlideUp.header', { count: products.length })}</Text>
      <Text style={styles.description}>
        {i18n.t('components.outOfStockSlideUp.description')}
      </Text>
      <ScrollView style={styles.scrollBox}>
        <View style={styles.inventoriesList} onStartShouldSetResponder={() => true}>
          { !!products && !!products.length && renderProducts()}
        </View>
      </ScrollView>
      <View style={styles.buttonPanel}>
        <Button
          onPress={onUpdateCartPress}
        >
          {i18n.t('components.outOfStockSlideUp.updateCart')}
        </Button>
      </View>
    </SlideUp>
  );
};

export default withTheme(OutOfStockSlideUp);
