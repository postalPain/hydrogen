import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { ProjectThemeType } from 'theme';

import useStyles from './styles';

interface IHeaderProps {
  theme?: ProjectThemeType;
}

const Header: React.FC<IHeaderProps> = ({
  theme,
}) => {
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.contentBox}>
        <ImageBackground
          source={require('../../../assets/images/commingSoonBg.png')}
          style={styles.comingBox}
        >
          <Text style={styles.comingBoxText}>
            {i18n.t('components.comingSoon.boxText')}
          </Text>
        </ImageBackground>
        <Text style={styles.headText}>
          {i18n.t('components.comingSoon.header')}
        </Text>
        <Text style={styles.descText}>
          {i18n.t('components.comingSoon.description')}
        </Text>
      </View>
    </View>
  );
};

export default withTheme(Header);
