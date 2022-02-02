import React from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useSelector } from 'react-redux';
import { withTheme, Text } from '@stryberventures/stryber-react-native-ui-components';
import { StackActions, useNavigation } from '@react-navigation/native';

import i18n from 'i18n';
import { IDeliveryAddress } from 'store/user/reducers/types';
import { categoriesSelector } from 'store/categories/selectors';
import {
  deliveryAddressSelector,
  temporaryDeliveryAddressSelector,
  userSelector,
} from 'store/user/selectors';
import { Routes } from 'navigation';
import {
  LocationButton, HomeCarousel, CategoriesViewer,
} from 'components';
import { AccountIcon } from 'components/Icons';
import { ProjectThemeType } from 'styles/theme';
import useStyles from './styles';

interface IHomeProps {
  theme: ProjectThemeType;
}

const HomeScreen: React.FC<IHomeProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const navigation = useNavigation();
  const categories = useSelector(categoriesSelector);
  const user = useSelector(userSelector);
  const deliveryAddress = useSelector(deliveryAddressSelector);
  const temporaryDeliveryAddress = useSelector(temporaryDeliveryAddressSelector);
  const address: IDeliveryAddress = temporaryDeliveryAddress || deliveryAddress;
  const handleChangeAddress = () => navigation
    .dispatch(StackActions.push(Routes.MapScreen, { changeAddress: true }));

  return (
    <View style={styles.container}>
      <ScrollView testID="homeScrollView">
        <ImageBackground
          source={require('../../../assets/images/header.png')}
          style={styles.header}
          imageStyle={styles.headerImage}
        >
          <View style={styles.headerProfileBlock}>
            <View style={styles.headerProfileBlockLeftCol}>
              <Text style={styles.helloText}>
                { user?.first_name
                  ? i18n.t('screens.home.helloUserMessage', { name: user.first_name })
                  : i18n.t('screens.home.helloMessage')}
              </Text>
            </View>
            <View style={styles.headerProfileBlockRightCol}>
              <TouchableOpacity
                // @ts-ignore
                onPress={() => navigation.openDrawer()}
                style={styles.accountButton}
              >
                <AccountIcon />
              </TouchableOpacity>
            </View>
          </View>
          <LocationButton
            location={address?.full_address}
            onPress={handleChangeAddress}
          />
        </ImageBackground>
        <View style={styles.contentBox}>
          <HomeCarousel style={styles.homeCarousel} />
          <CategoriesViewer data={categories} />
        </View>
      </ScrollView>
    </View>
  );
};

export default withTheme(HomeScreen);
