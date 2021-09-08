import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, CacheImage } from '@stryberventures/stryber-react-native-ui-components';

import { TCategory } from 'services/ServerAPI/types';
import useStyles from './styles';


const CategoryItem = ({ name, image_url }: TCategory) => {
  const classes = useStyles();
  const onItemPress = () => {

  };

  return (
    <TouchableOpacity
      style={classes.container}
      onPress={onItemPress}
      activeOpacity={0.7}
    >
      <View style={classes.contentBox}>
        <View style={classes.labelContainer}>
          <Text style={classes.label}>{name}</Text>
        </View>
        <View style={classes.imageWrapper}>
          <CacheImage
            source={{ uri: image_url }}
            style={classes.image}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryItem;
