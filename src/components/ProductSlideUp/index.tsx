import React, { useRef } from 'react';
import {
  View,
  ScrollView,
  useWindowDimensions,
  Animated,
} from 'react-native';
import {
  Text, CacheImage,
} from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { TProduct } from 'services/ServerAPI/types';
import { formatCurrency, formatAmount } from 'utilities/helpers';
import { SlideUp, AddProductButton } from 'components';
import { CheckCircleIcon } from 'components/Icons';
import useStyles from './styles';

interface IProductSlideUp {
  visible: boolean;
  onClose: () => void;
  data: TProduct;
}

const ProductSlideUp: React.FC<IProductSlideUp> = ({ visible, onClose, data }) => {
  const styles = useStyles();
  const windowSize = useWindowDimensions();
  const fadeAddProductAnim = useRef(new Animated.Value(0)).current;
  const blinkAddProductPopup = () => {
    Animated.sequence([
      Animated.timing(fadeAddProductAnim, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAddProductAnim, {
        delay: 2000,
        toValue: 0,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const onProductAdded = (count, increment) => {
    // TODO add product to basket
    if (increment > 0) {
      blinkAddProductPopup();
    }
  };

  return (
    <SlideUp
      visible={visible}
      onClose={onClose}
    >
      <View style={[
        styles.container,
        { height: windowSize.height - 180 },
      ]}
      >
        <ScrollView>
          <View onStartShouldSetResponder={() => true}>
            <View style={styles.imageWrapper}>
              <CacheImage
                source={{ uri: data.image_url }}
                style={styles.image}
              />
            </View>
            <Text style={styles.productName}>{`${data.name}${data.pieces ? `(${data.pieces})` : ''}`}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.origin}>
              {`${i18n.t('components.productSlideUp.origin')}: ${data.origin}`}
            </Text>
            <Text style={styles.amount}>{formatAmount(data)}</Text>
            <Text style={styles.price}>
              {`${i18n.t('components.productSlideUp.price')}: ${formatCurrency(data.price)}`}
            </Text>
          </View>
        </ScrollView>
        <View style={styles.buttonPanel}>
          <Animated.View style={[styles.addedToCartPopup, { opacity: fadeAddProductAnim }]}>
            <CheckCircleIcon />
            <Text style={styles.addedToCartPopupText}>
              {i18n.t('components.productSlideUp.itemAdded')}
            </Text>
          </Animated.View>
          <AddProductButton
            price={data.price}
            onCountChange={onProductAdded}
          />
        </View>
      </View>
    </SlideUp>
  );
};

export default ProductSlideUp;
