import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import { appLoaderVisibilitySelector } from 'store/app/selectors';
import { Loader } from 'components';
import useStyles from './styles';


const AppLoadingScreen: React.FC = () => {
  const styles = useStyles();
  const isVisible = useSelector(appLoaderVisibilitySelector);

  if (!isVisible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.loaderBox}>
        <Loader />
      </View>
    </View>
  );
};

export default AppLoadingScreen;
