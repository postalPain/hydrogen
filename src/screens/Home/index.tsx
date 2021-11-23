import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useSelector } from 'react-redux';
import { withTheme, Text } from '@stryberventures/stryber-react-native-ui-components';
import { NavigationContainerRef, StackActions, useNavigation } from '@react-navigation/native';

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
  LocationButton, HomeCarousel, CategoriesViewer, WorkingHoursModal,
} from 'components';
import { AccountIcon } from 'components/Icons';
import { ProjectThemeType } from 'styles/theme';
import useStyles from './styles';
import { appOptionsSelector } from 'store/app/selectors';
import { checkWorkingHours } from 'utilities/helpers';


interface IHomeProps {
  navigation: NavigationContainerRef<any>;
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
  const [showWorkingHoursModal, setShowWorkingHoursModal] = useState(false);
  const appOptions = useSelector(appOptionsSelector);
  const isWorkingHours = checkWorkingHours(
    Number(appOptions?.working_hours_start?.slice(0, 2)),
    Number(appOptions?.working_hours_end?.slice(0, 2)),
  );

  useEffect(() => {
    if (!isWorkingHours) {
      setShowWorkingHoursModal(true);
    }
  }, [isWorkingHours]);

  return (
    <>
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
            <View style={styles.openHours}>
              <Text style={styles.openHoursText}>
                {i18n.t('screens.home.openHours', {
                  start: appOptions?.working_hours_start?.slice(0, 5),
                  end: appOptions?.working_hours_end?.slice(0, 5),
                })}
              </Text>
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
      <WorkingHoursModal
        visible={showWorkingHoursModal}
        onClose={() => setShowWorkingHoursModal(false)}
      />
    </>
  );
};

export default withTheme(HomeScreen);
