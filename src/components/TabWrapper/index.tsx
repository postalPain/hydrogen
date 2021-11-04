import React from 'react';
import { View } from 'react-native';
import useStyles from './styles';

const TabWrapper = (TabComponent: any) => {
  const styles = useStyles();
  return (params) => (
    <View style={styles.container}>
      <TabComponent {...params} />
    </View>
  );
};

export default TabWrapper;
