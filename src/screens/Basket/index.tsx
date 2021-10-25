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
  route: any;
}

const BasketScreen: React.FC<IBasketProps> = ({ theme, route }) => {
  const basketLength = useSelector(basketLengthSelector());
  const styles = useStyles(theme, basketLength);
  const updated = !!route.params && route.params.updated;

  return (
    <SafeAreaView style={styles.container}>
      <Basket updated={updated} />
    </SafeAreaView>
  );
};

export default withTheme(BasketScreen);
