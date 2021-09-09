import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, CacheImage } from '@stryberventures/stryber-react-native-ui-components';

import { TCategory } from 'services/ServerAPI/types';
import useStyles from './styles';


const CategoryItem = ({ name, image_url }: TCategory) => {
  const styles = useStyles();
  const onItemPress = () => {

  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onItemPress}
      activeOpacity={0.7}
    >
      <View style={styles.contentBox}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{name}</Text>
        </View>
        <View style={styles.imageWrapper}>
          <CacheImage
            source={{ uri: image_url }}
            style={styles.image}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
