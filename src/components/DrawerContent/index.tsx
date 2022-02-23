import React from 'react';
import useStyles from './styles';
import { TouchableOpacity, View } from 'react-native';
import { Button, Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { ProjectThemeType } from 'theme';
import { openLink } from 'services/inAppBrowser';
import { useDispatch, useSelector } from 'react-redux';
import { userSelector } from 'store/user/selectors';
import { signOut } from 'store/user/actions';
import i18n from 'i18n';
import { useNavigation } from '@react-navigation/native';
import { Routes } from 'navigation';
import WhatsAppLink from '../WhatsAppLink';

interface IDrawerContentProps extends DrawerContentComponentProps {
  theme?: ProjectThemeType;
}

const DrawerContent: React.FC<IDrawerContentProps> = ({ theme, ...rest }) => {
  const styles = useStyles(theme);
  const user = useSelector(userSelector);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();

  const isUser = user?.email;

  const handleSignUp = () => navigate(Routes.SignUp);
  const handleLogin = () => navigate(Routes.Login);
  const handleLogout = () => dispatch(signOut());

  const renderHeader = () => (isUser ? (
    <View style={styles.headerContainer}>
      <View style={styles.avatar}>
        <Text style={styles.avatarInitials}>{`${user.first_name[0]}${user.last_name[0]}`}</Text>
      </View>
      <Text style={styles.userName}>{`${user.first_name} ${user.last_name}`}</Text>
      <Text style={styles.description}>{user.email}</Text>
    </View>
  ) : (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>{i18n.t('components.drawerContent.title')}</Text>
      <Text style={styles.description}>
        {i18n.t('components.drawerContent.description')}
      </Text>
      <TouchableOpacity style={styles.promoCodeButton} onPress={() => openLink('https://www.getblitz.io/promos/')}>
        <Text style={styles.promoCode}>{i18n.t('components.drawerContent.promoCode')}</Text>
      </TouchableOpacity>
    </View>
  ));

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...rest}>
        {renderHeader()}
        <View style={styles.menuContainer}>
          <Button
            type="link"
            style={styles.linkContainer}
            textStyle={styles.mainLink}
            onPress={() => navigate(Routes.OrderList)}
          >
            {i18n.t('components.drawerContent.orders')}
          </Button>
          {isUser && (
            <Button
              onPress={() => openLink('https://www.getblitz.io/promos/')}
              type="link"
              style={styles.linkContainer}
              textStyle={styles.link}
            >
              {i18n.t('components.drawerContent.promoCode')}
            </Button>
          )}
          <Button
            onPress={() => openLink('https://www.getblitz.io/faq/')}
            type="link"
            style={styles.linkContainer}
            textStyle={styles.link}
          >
            {i18n.t('components.drawerContent.faq')}
          </Button>
          <Button
            onPress={() => openLink('https://www.getblitz.io/about-us/')}
            type="link"
            style={styles.linkContainer}
            textStyle={styles.link}
          >
            {i18n.t('components.drawerContent.about')}
          </Button>
          <Button
            onPress={() => openLink('https://www.getblitz.io/contact-us/')}
            type="link"
            style={styles.linkContainer}
            textStyle={styles.link}
          >
            {i18n.t('components.drawerContent.contact')}
          </Button>
          <Button
            onPress={() => openLink('https://www.getblitz.io/delivery/')}
            type="link"
            style={styles.linkContainer}
            textStyle={styles.link}
          >
            {i18n.t('components.drawerContent.delivery')}
          </Button>
          <Button
            onPress={() => openLink('https://www.getblitz.io/privacy-policy-app/')}
            type="link"
            style={styles.linkContainer}
            textStyle={styles.link}
          >
            {i18n.t('components.drawerContent.terms')}
          </Button>
          {!isUser && (
          <>
            <Button
              onPress={handleSignUp}
              type="link"
              style={styles.linkContainer}
              textStyle={styles.link}
            >
              {i18n.t('components.drawerContent.signUp')}
            </Button>
            <Button
              onPress={handleLogin}
              type="link"
              style={styles.linkContainer}
              textStyle={styles.link}
            >
              {i18n.t('components.drawerContent.login')}
            </Button>
          </>
          )}
          {isUser && (
            <Button
              onPress={handleLogout}
              type="link"
              style={styles.linkContainer}
              textStyle={styles.link}
            >
              {i18n.t('components.drawerContent.logout')}
            </Button>
          )}
        </View>
      </DrawerContentScrollView>
      <WhatsAppLink />
    </View>
  );
};

export default withTheme(DrawerContent);
