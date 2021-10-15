import React from 'react';
import { View } from 'react-native';
import { Text } from '@stryberventures/stryber-react-native-ui-components';
import { useSelector } from 'react-redux';

import { basketLengthSelector } from 'store/user/selectors';
import useStyles from './styles';

const BasketBadge: React.FC = () => {
  const styles = useStyles();
  const basketLength = useSelector(basketLengthSelector());

  if (!basketLength) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{basketLength}</Text>
    </View>
  );
};

export default BasketBadge;
