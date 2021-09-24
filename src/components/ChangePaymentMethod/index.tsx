import React from 'react';
import useStyles from './styles';
import { Pressable, View } from 'react-native';
import { Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { CreditCard, LeftChevron, PlusCard } from 'components/Icons';
import { ProjectThemeType } from 'theme';
import { useBottomSheet } from '@gorhom/bottom-sheet';
import i18n from 'i18n';

interface IChangePaymentMethodProps {
  theme?: ProjectThemeType;
  addCard: () => void;
  changeCard: () => void;
}

const ChangePaymentMethod: React.FC<IChangePaymentMethodProps> = ({
  theme,
  addCard,
  changeCard,
}) => {
  const styles = useStyles(theme);

  const { close } = useBottomSheet();
  const handleAddNewCard = () => {
    close();
    addCard();
  };
  const handleChangeCard = () => {
    close();
    changeCard();
  };

  return (
    <View>
      <Text style={styles.title}>{i18n.t('components.changePaymentMethod.title')}</Text>
      <Pressable onPress={handleChangeCard}>
        <View style={styles.optionContainer}>
          <View style={styles.option}>
            <CreditCard />
            <Text style={styles.optionText}>{i18n.t('components.changePaymentMethod.changeCard')}</Text>
          </View>
          <LeftChevron />
        </View>
      </Pressable>
      <Pressable onPress={handleAddNewCard}>
        <View style={[styles.optionContainer, styles.bottomOptionContainer]}>
          <View style={styles.option}>
            <PlusCard />
            <Text style={styles.optionText}>{i18n.t('components.changePaymentMethod.addCard')}</Text>
          </View>
          <LeftChevron />
        </View>
      </Pressable>
    </View>
  );
};

export default withTheme(ChangePaymentMethod);
