import React from 'react';
import { SafeAreaView } from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { useSelector } from 'react-redux';

import { ProjectThemeType } from 'styles/theme';
import { basketLengthSelector } from 'store/user/selectors';
import { Basket } from 'components';
import useStyles from './styles';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from 'navigation/types';
import { Routes } from 'navigation';


interface IBasketProps {
  theme?: ProjectThemeType;
}

type BasketRouteProp = RouteProp<RootStackParamList, Routes.Basket>;

const BasketScreen: React.FC<IBasketProps> = ({ theme }) => {
  const basketLength = useSelector(basketLengthSelector());
  const styles = useStyles(theme, basketLength);
  const route = useRoute<BasketRouteProp>();
  const updated = !!route.params && route.params.updated;

  return (
    <SafeAreaView style={styles.container}>
      <Basket updated={updated} />
    </SafeAreaView>
  );
};

export default withTheme(BasketScreen);
