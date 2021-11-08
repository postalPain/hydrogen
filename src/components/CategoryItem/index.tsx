import React from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from '@stryberventures/stryber-react-native-ui-components';

import { TCategory } from 'services/ServerAPI/types';
import { navigate } from 'navigation/NavigationUtilities';
import useStyles from './styles';
import { Routes } from 'navigation';


const CategoryItem = ({ name, image_url, uuid }: TCategory) => {
  const styles = useStyles();
  const onItemPress = () => {
    navigate(Routes.TabNavigation, {
      screen: Routes.HomeTabScreen,
      params: {
        screen: Routes.ProductsScreen,
        params: {
          categoryId: uuid,
        },
      },
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onItemPress}
      activeOpacity={0.7}
    >
      <ImageBackground
        source={{ uri: image_url }}
        style={styles.contentBox}
        imageStyle={styles.contentBoxImage}
      >
        <Text style={styles.label}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CategoryItem;
