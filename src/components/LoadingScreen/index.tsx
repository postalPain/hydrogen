import React from 'react';
import { View } from 'react-native';

import { Loader } from 'components';
import useStyles from './styles';


const LoadingScreen: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.loaderBox}>
        <Loader />
      </View>
    </View>
  );
};

export default LoadingScreen;
