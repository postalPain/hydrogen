import React, { useRef, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

import { LoaderIcon } from 'components/Icons';
import useStyles from './styles';


const Loader: React.FC = () => {
  const styles = useStyles();
  const rotationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const rotateAnimation = Animated.loop(Animated.timing(rotationValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }));
    rotateAnimation.start();

    return () => {
      rotateAnimation.stop();
    };
  }, []);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{
            rotate: rotationValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg'],
            }),
          }],
        },
      ]}
    >
      <LoaderIcon />
    </Animated.View>
  );
};

export default Loader;
