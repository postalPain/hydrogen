import React from 'react';
import useStyles from './styles';
import { View, TouchableOpacity } from 'react-native';
import { Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { StackHeaderProps } from '@react-navigation/stack';
import { Back, NavBackground, NavSide } from 'components/Icons';
import { ProjectThemeType } from 'theme';

interface IHeaderProps {
  theme?: ProjectThemeType;
}

const Header: React.FC<StackHeaderProps & IHeaderProps> = ({
  theme,
  options,
  route,
  navigation,
}) => {
  const styles = useStyles(theme);
  // @ts-ignore
  const { headerTitle, hideBackButton } = options;
  const { name } = route;
  const { canGoBack, goBack } = navigation;
  return (
    <View style={styles.container}>
      <NavSide style={styles.headerLeftSide} />
      <NavBackground style={styles.headerLine} />
      <NavSide style={styles.headerRightSide} />
      <View style={styles.contentWrapper}>
        {(!hideBackButton && canGoBack()) && (
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Back />
        </TouchableOpacity>
        )}
        <Text style={styles.title}>{headerTitle || name}</Text>
      </View>
    </View>
  );
};

export default withTheme(Header);
