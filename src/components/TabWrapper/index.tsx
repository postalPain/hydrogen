import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';

const TabWrapper = (TabComponent: any) => {
  const classes = useStyles();
  return () => (
    <View style={classes.container}>
      <TabComponent />
    </View>
  );
};

export default TabWrapper;
