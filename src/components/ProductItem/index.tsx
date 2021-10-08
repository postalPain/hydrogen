import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  CacheImage,
  withTheme,
  ButtonCounter,
} from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { TProduct } from 'services/ServerAPI/types';
import { formatCurrency, formatAmount } from 'utilities/helpers';
import { ProjectThemeType } from 'styles/theme';
import { PlusCircleIcon } from 'components/Icons';
import useStyles from './styles';


interface IProductItemProps {
  data: TProduct;
  theme?: ProjectThemeType;
  onPress?: () => void;
}

const ProductItem: React.FC<IProductItemProps> = ({
  theme,
  data,
  onPress,
}) => {
  const styles = useStyles(theme);
  const [addButtonCounterVisible, setAddButtonCounterVisible] = useState(false);
  // TODO add condition on product availability
  const disabled = false;

  const onPlusButtonPress = () => {
    setAddButtonCounterVisible(true);
  };
  const onCountButtonChange = (count) => {
    if (count === 0) {
      setAddButtonCounterVisible(false);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.contentBox}>
          {
            addButtonCounterVisible
              ? (
                <ButtonCounter
                  style={styles.addToCartButtonCounter}
                  initialValue={1}
                  size="mini"
                  color={theme.colors.yellow}
                  onCountChange={onCountButtonChange}
                />
              ) : (
                <TouchableOpacity
                  onPress={onPlusButtonPress}
                  style={styles.addToCartButton}
                >
                  <PlusCircleIcon />
                </TouchableOpacity>
              )
          }

          <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.85}
            style={styles.touchableContent}
          >
            <View style={styles.imageWrapper}>
              <CacheImage
                source={{ uri: data.image_url }}
                style={styles.image}
              />
            </View>
            <Text style={[styles.price, styles.p]}>
              {formatCurrency(data.price)}
            </Text>
            <Text style={[styles.text, styles.p]}>
              {data.name}
            </Text>
            <Text style={[styles.text, styles.p]}>
              {formatAmount(data)}
            </Text>
            <Text style={[styles.more, styles.p]}>
              {i18n.t('components.productItem.more')}
            </Text>
          </TouchableOpacity>
          {
            disabled && (
              <View style={styles.disableOverlay}>
                <View style={styles.badgeNotAvailable}>
                  <Text style={styles.badgeNotAvailableText}>
                    {i18n.t('components.subcategoryTab.backSoon')}
                  </Text>
                </View>
              </View>
            )
          }
        </View>
      </View>
    </>
  );
};

export default withTheme(ProductItem);
