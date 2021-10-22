import React from 'react';
import { SafeAreaView } from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { useSelector } from 'react-redux';

import { ProjectThemeType } from 'styles/theme';
import { basketLengthSelector } from 'store/user/selectors';
import { Basket } from 'components';
import useStyles from './styles';


interface IBasketProps {
  theme: ProjectThemeType;
}

const BasketScreen: React.FC<IBasketProps> = ({ theme }) => {
  const basketLength = useSelector(basketLengthSelector());
  const styles = useStyles(theme, basketLength);

  return (
    <SafeAreaView style={styles.container}>
      <Basket />
    </SafeAreaView>
  );
};

export default withTheme(BasketScreen);
