import React, { useState } from 'react';
import useStyles from './styles';
import { Image, View, Pressable } from 'react-native';
import { Text, Checkbox, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import masterCard from '../../../assets/images/mc.jpg';
import { LeftChevron } from 'components/Icons';
import { ProjectThemeType } from 'theme';
import { useBottomSheet } from '@gorhom/bottom-sheet';
import i18n from 'i18n';

interface ICardVariantProps {
  theme?: ProjectThemeType;
}

const CardVariant: React.FC<ICardVariantProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const [card, setCard] = useState(0);
  const { close } = useBottomSheet();

  const handleCardChange = (index: number) => {
    setCard(index);
    close();
  };

  return (
    <View>
      <Text style={styles.title}>{i18n.t('components.cardVariant.title')}</Text>
      <Pressable onPress={() => handleCardChange(0)}>
        <View style={styles.cardContainer}>
          <View style={styles.cardNumContainer}>
            <Checkbox radio text="" onPress={() => handleCardChange(0)} value={card === 0} key={card} />
            <View style={styles.cardWrapper}>
              <Text style={styles.cardTitle}>{i18n.t('components.cardVariant.cardTitle')}</Text>
              <View style={styles.cardNum}>
                <Text style={styles.card}>XXXX  XXXX  XXXX  1776</Text>
                <Image style={styles.image} source={masterCard} />
              </View>
            </View>
          </View>
          <LeftChevron />
        </View>
      </Pressable>
      <Pressable onPress={() => handleCardChange(1)}>
        <View style={[styles.cardContainer, styles.lastCardContainer]}>
          <View style={styles.cardNumContainer}>
            <Checkbox radio text="" onPress={() => handleCardChange(1)} value={card === 1} key={card} />
            <View style={styles.cardWrapper}>
              <Text style={styles.cardTitle}>Card Number</Text>
              <View style={styles.cardNum}>
                <Text style={styles.card}>XXXX  XXXX  XXXX  1776</Text>
                <Image style={styles.image} source={masterCard} />
              </View>
            </View>
          </View>
          <LeftChevron />
        </View>
      </Pressable>
    </View>
  );
};

export default withTheme(CardVariant);
