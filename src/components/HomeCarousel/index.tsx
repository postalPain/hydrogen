import React, { useState } from 'react';
import { View } from 'react-native';
import { Text } from '@stryberventures/stryber-react-native-ui-components';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import useStyles from './styles';

const HomeCarousel = () => {
  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  // mocked values(will be changed in future)
  const carouselItems = [
    {
      title: 'Item 1',
      text: 'Text 1',
    },
    {
      title: 'Item 2',
      text: 'Text 2',
    },
    {
      title: 'Item 3',
      text: 'Text 3',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={classes.carouselItem}>
      <Text>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>

  );

  return (
    <View style={classes.container}>
      <Carousel
        layout="default"
        data={carouselItems}
        sliderWidth={350}
        itemWidth={350}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveIndex(index)}
        loop
        autoplay
        autoplayInterval={5000}
      />
      <Pagination dotsLength={carouselItems.length} activeDotIndex={activeIndex} />
    </View>
  );
};

export default HomeCarousel;
