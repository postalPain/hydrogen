import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Animated,
  Dimensions,
  PanResponder,
} from 'react-native';
import useStyles from './styles';

interface ISlideUp {
  children: React.ReactNode;
  visible: boolean;
  onClose: () => void;
}

const SlideUp = ({ visible, children, onClose }: ISlideUp) => {
  const classes = useStyles();
  const [panY] = useState(new Animated.Value(Dimensions.get('screen').height));
  const resetPositionAnim = useRef(Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: false,
  }));
  const closeAnim = useRef(Animated.timing(panY, {
    toValue: Dimensions.get('screen').height,
    duration: 300,
    useNativeDriver: false,
  }));
  const handleDismiss = () => closeAnim.current.start(onClose);
  const panResponders = useRef(PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => false,
    onPanResponderMove: Animated.event([
      null, { dy: panY },
    ], { useNativeDriver: false }),
    onPanResponderRelease: (e, gs) => {
      if (gs.dy > 0 && gs.vy > 0.02) {
        return closeAnim.current.start(onClose);
      }
      return resetPositionAnim.current.start();
    },
  }));

  useEffect(() => {
    if (visible) {
      resetPositionAnim.current.start();
    }
  }, [visible]);

  const top = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <Modal
      animated
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={() => handleDismiss()}
    >
      <View style={classes.overlay}>
        <View {...panResponders.current.panHandlers}>
          <Animated.View style={[classes.container, { top }]}>
            <View style={classes.contentBox}>
              { children }
            </View>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

export default SlideUp;
