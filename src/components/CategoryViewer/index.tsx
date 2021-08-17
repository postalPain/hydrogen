import React from 'react';
import useStyles from './styles';
import { View } from 'react-native';
import { Text, Block } from '@stryberventures/stryber-react-native-ui-components';
import CategoryItem from 'components/CategoryItem';

const CategoryViewer = () => {
  const classes = useStyles();
  return (
    <View style={classes.container}>
      <Text h3 style={classes.title}>
        {'{'}
        Category name
        {'}'}
      </Text>
      <Block row>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </Block>
    </View>
  );
};

export default CategoryViewer;
