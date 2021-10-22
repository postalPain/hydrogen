import React from 'react';
import useStyles from './styles';
import { View } from 'react-native';
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

interface IDrawerContentProps extends DrawerContentComponentProps {
  theme?: ProjectThemeType;
}

const DrawerContent: React.FC<IDrawerContentProps> = ({ theme, ...rest }) => {
  const styles = useStyles(theme);
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const isUser = user?.email;

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
      <Text style={styles.title}>Don’t have an account yet?</Text>
      <Text style={styles.description}>
        Create your account now and enjoy your first oder with a promo code
      </Text>
      <Text selectable style={styles.promoCode}>GOBLITZ50</Text>
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
          >
            My orders
          </Button>
          <Button
            onPress={() => openLink('https://www.getblitz.io/about-us/')}
            type="link"
            style={styles.linkContainer}
            textStyle={styles.link}
          >
            Get to know us
          </Button>
          <Button
            onPress={() => openLink('https://www.getblitz.io/contact-us/')}
            type="link"
            style={styles.linkContainer}
            textStyle={styles.link}
          >
            Get in touch
          </Button>
          <Button
            onPress={() => openLink('https://www.getblitz.io/delivery/')}
            type="link"
            style={styles.linkContainer}
            textStyle={styles.link}
          >
            Delivery
          </Button>
          <Button
            onPress={() => openLink('https://www.getblitz.io/terms-privacy/')}
            type="link"
            style={styles.linkContainer}
            textStyle={styles.link}
          >
            Terms & Privacy
          </Button>
          {isUser && (
          <Button
            onPress={handleLogout}
            type="link"
            style={styles.linkContainer}
            textStyle={styles.link}
          >
            Log Out
          </Button>
          )}
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

export default withTheme(DrawerContent);
