import React from 'react';
import { View } from 'react-native';

import useStyles from './styles';

interface ICarouselDotElement {
  active?: boolean;
  index?: number;
}

const CarouselDotElement: React.FC<ICarouselDotElement> = ({ active }) => {
  const classes = useStyles();

  return (
    <View style={[
      classes.container,
      active ? classes.containerActive : {},
    ]}
    />
  );
};

export default CarouselDotElement;
