import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Text, Button } from '@stryberventures/stryber-react-native-ui-components';

import { SlideUp } from 'components';
import useStyles from './styles';

const CategoryItem = () => {
  const classes = useStyles();
  const [categoryItemVisibility, setCategoryItemVisibility] = useState(false);
  const onItemPress = () => {
    setCategoryItemVisibility(true);
  };
  const onItemDetailsClose = () => {
    setCategoryItemVisibility(false);
  };
  const onPressAddItem = () => {
    setCategoryItemVisibility(false);
  };

  return (
    <>
      <TouchableOpacity
        style={classes.container}
        onPress={onItemPress}
      />
      <SlideUp
        visible={categoryItemVisibility}
        onClose={onItemDetailsClose}
      >
        <View style={classes.categoryItemInfo}>
          <TouchableOpacity
            onPress={onItemDetailsClose}
            style={classes.crossButton}
          >
            <Image
              source={require('../../../assets/images/arrowdown.png')}
              style={classes.crossImage}
            />
          </TouchableOpacity>
          <Image
            style={classes.itemInfoPicture}
            source={{ uri: 'https://thumbs.dreamstime.com/b/long-loaf-bread-22826883.jpg' }}
          />
          <Text>{ '{product-name}' }</Text>
          <Text>{ 'AED {product-price} AED 00.00' }</Text>
          <Text>{ '{description}' }</Text>

          <View style={classes.itemInfoRow}>
            <View style={classes.itemInfoCol}>
              <Text>Product name: Bread</Text>
            </View>
            <View style={classes.itemInfoCol}>
              <Text>Price: 1USD</Text>
            </View>
          </View>
          <View style={classes.itemInfoRow}>
            <View style={classes.itemInfoCol}>
              <Text>Weight: 0.5kilo</Text>
            </View>
          </View>
          <View style={classes.itemInfoRow}>
            <View style={classes.itemInfoCol}>
              <Text>Origin: Ukraine</Text>
            </View>
          </View>
          <View style={classes.buttonBox}>
            <Button onPress={onPressAddItem}>Add item</Button>
          </View>
        </View>
      </SlideUp>
    </>
  );
};

export default CategoryItem;
