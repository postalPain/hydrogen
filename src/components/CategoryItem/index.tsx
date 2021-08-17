import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';

const CategoryItem = () => {
  const classes = useStyles();

  return <View style={classes.container} />;
};

export default CategoryItem;
