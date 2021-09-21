import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';

interface ICarouselDotElement {
  active?: boolean;
  index?: number;
}

const CarouselDotElement: React.FC<ICarouselDotElement> = ({ active }) => {
  const styles = useStyles();

  return (
    <View style={[
      styles.container,
      active ? styles.containerActive : {},
    ]}
    />
  );
};

export default CarouselDotElement;
