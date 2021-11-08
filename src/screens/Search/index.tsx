import React from 'react';
import { View } from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';

import { ComingSoon } from 'components';
import { ProjectThemeType } from 'styles/theme';
import useStyles from './styles';


interface ISearchProps {
  theme: ProjectThemeType;
}

const SearchScreen: React.FC<ISearchProps> = ({ theme }) => {
  const styles = useStyles(theme);

  return (
    <View style={styles.container}>
      <ComingSoon />
    </View>
  );
};

export default withTheme(SearchScreen);
