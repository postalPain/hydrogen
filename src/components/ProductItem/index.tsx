import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Text,
  CacheImage,
  withTheme,
} from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { TProduct } from 'services/ServerAPI/types';
import { ProjectThemeType } from 'styles/theme';
import { PlusCircleIcon } from 'components/Icons';
import useStyles from './styles';


interface IProductItemProps {
  data: TProduct;
  theme?: ProjectThemeType;
}

const ProductItem: React.FC<IProductItemProps> = ({ theme, data }) => {
  const styles = useStyles(theme);
  const disabled = false;

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <TouchableOpacity
          style={styles.addToCartButton}
        >
          <PlusCircleIcon />
        </TouchableOpacity>
        <View style={styles.imageWrapper}>
          <CacheImage
            source={{ uri: data.image_url }}
            style={styles.image}
          />
        </View>
        <View style={styles.p}>
          <Text style={styles.price}>
            {`${data.price} AED`}
          </Text>
        </View>
        <View style={styles.p}>
          <Text style={styles.description}>{data.description}</Text>
        </View>
        <View style={styles.p}>
          <Text style={styles.more}>
            {i18n.t('components.productItem.more')}
          </Text>
        </View>
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
  );
};

export default withTheme(ProductItem);
