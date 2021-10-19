import React, { useRef } from 'react';
import {
  View,
  ScrollView,
  useWindowDimensions,
  Animated,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  Text, CacheImage, ButtonCounter,
} from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { TProduct } from 'services/ServerAPI/types';
import { formatCurrency, formatAmount, getMaxProductCount } from 'utilities/helpers';
import { setProductToBasket } from 'store/user/actions';
import { basketProductSelector } from 'store/user/selectors';
import { SlideUp } from 'components';
import { CheckCircleIcon } from 'components/Icons';
import useStyles from './styles';

interface IProductSlideUp {
  visible: boolean;
  onClose: () => void;
  data: TProduct;
}

const ProductSlideUp: React.FC<IProductSlideUp> = ({ visible, onClose, data }) => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const basketData = useSelector(basketProductSelector(data.uuid));
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
    dispatch(setProductToBasket({
      ...data,
      basketQuantity: count,
    }));
    if (increment > 0) {
      blinkAddProductPopup();
    }
  };
  const initialQuantity = basketData && basketData.basketQuantity || 0;

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
            <Text style={styles.productName}>{`${data.name}${data.pieces ? ` (${data.pieces} ${i18n.t('components.productSlideUp.pieces')})` : ''}`}</Text>
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
          <ButtonCounter
            renderCount={(count, style) => (
              <Text style={style}>
                {formatCurrency(data.price)}
                <Text style={[style, styles.countText]}>{` x ${count}`}</Text>
              </Text>
            )}
            onCountChange={onProductAdded}
            initialValue={initialQuantity}
            maxValue={getMaxProductCount(data)}
          >
            {i18n.t('components.productSlideUp.addItem')}
          </ButtonCounter>
        </View>
      </View>
    </SlideUp>
  );
};

export default ProductSlideUp;
