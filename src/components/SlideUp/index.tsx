import React, { useState, useEffect, useRef } from 'react';
import {
  Modal,
  View,
  Animated,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

import { CrossIcon } from 'components/Icons';
import useStyles from './styles';

interface ISlideUp {
  children: React.ReactNode;
  visible: boolean;
  onClose?: () => void;
  renderWrapper?: (node: React.ReactNode) => React.ReactNode;
  containerStyle?: any;
  contentStyle?: any;
  disableClose?: boolean;
}

const SlideUp: React.FC<ISlideUp> = ({
  visible,
  children,
  onClose = () => {},
  renderWrapper = (node) => node,
  containerStyle,
  contentStyle,
  disableClose = false,
}) => {
  const styles = useStyles();
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
  const handleDismiss = () => {
    if (!disableClose) {
      closeAnim.current.start(onClose);
    }
  };

  useEffect(() => {
    if (visible) {
      resetPositionAnim.current.start();
    }
  }, [visible]);

  const top = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });


  const renderModal = () => (
    <View
      style={[styles.container, containerStyle]}
    >
      { !disableClose && (
        <TouchableOpacity
          style={styles.crossButton}
          onPress={() => handleDismiss()}
        >
          <CrossIcon />
        </TouchableOpacity>
      )}
      <View style={[styles.contentBox, contentStyle]}>
        { children }
      </View>
    </View>
  );


  return (
    <Modal
      animated
      animationType="fade"
      visible={visible}
      transparent
      onRequestClose={() => handleDismiss()}
    >
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={() => handleDismiss()}
      >
        <TouchableWithoutFeedback>
          <Animated.View style={{ top }}>
            {renderWrapper(renderModal())}
          </Animated.View>
        </TouchableWithoutFeedback>
      </TouchableOpacity>
    </Modal>
  );
};

export default SlideUp;
