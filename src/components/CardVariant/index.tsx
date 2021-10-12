import React, { useState } from 'react';
import useStyles from './styles';
import { Image, View, Pressable } from 'react-native';
import { Text, Checkbox, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import masterCard from '../../../assets/images/mc.jpg';
import visa from '../../../assets/images/visa.png';
import { LeftChevron } from 'components/Icons';
import { ProjectThemeType } from 'theme';
import { useBottomSheet, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import i18n from 'i18n';
import { useDispatch, useSelector } from 'react-redux';
import { setDefaultCard } from 'store/user/actions';

interface ICardVariantProps {
  theme?: ProjectThemeType;
}

const CardVariant: React.FC<ICardVariantProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const { close } = useBottomSheet();
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const cardList = useSelector(state => state.user.cardList);
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const defaultCard = useSelector(state => state.user.defaultCard);
  const dispatch = useDispatch();
  const [cardId, setCardId] = useState(defaultCard.uuid);

  const handleCardChange = (id: string) => {
    setCardId(id);
    dispatch(setDefaultCard(id));
    close();
  };

  return (
    <BottomSheetScrollView style={{ paddingBottom: 50 }}>
      <Text style={styles.title}>{i18n.t('components.cardVariant.title')}</Text>
      {cardList.map((cardInfo, idx) => (
        <Pressable onPress={() => handleCardChange(cardInfo.uuid)} key={cardInfo.uuid}>
          <View
            style={[
              styles.cardContainer,
              idx === (cardList.length - 1) && styles.lastCardContainer]}
          >
            <View style={styles.cardNumContainer}>
              <Checkbox radio text="" onPress={() => handleCardChange(cardInfo.uuid)} value={cardInfo.uuid === cardId} key={cardId} />
              <View style={styles.cardWrapper}>
                <Text style={styles.cardTitle}>{i18n.t('components.cardVariant.cardTitle')}</Text>
                <View style={styles.cardNum}>
                  <Text style={styles.card}>
                    XXXX  XXXX  XXXX
                    {` ${cardInfo.last4}`}
                  </Text>
                  {cardInfo.brand === 'Visa' ? <Image style={styles.image} source={visa} /> : <Image style={styles.image} source={masterCard} />}
                </View>
              </View>
            </View>
            <LeftChevron />
          </View>
        </Pressable>
      ))}
    </BottomSheetScrollView>
  );
};

export default withTheme(CardVariant);
