import React, { useState } from 'react';
import { View, Image } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { CarouselDotElement } from 'components';
import useStyles from './styles';


interface IHomeCarousel {
  style?: any;
}

const HomeCarousel: React.FC<IHomeCarousel> = ({ style = {} }) => {
  const styles = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselItems = [
    {
      img: require('../../../assets/images/slide_1.png'),
    },
    {
      img: require('../../../assets/images/slide_2.png'),
    },
    {
      img: require('../../../assets/images/slide_3.png'),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <View style={styles.imageBannerWrapper}>
        <Image
          source={item.img}
          style={styles.imageBanner}
        />
      </View>
    </View>

  );

  return (
    <View style={[styles.container, style]}>
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
      <Pagination
        dotsLength={carouselItems.length}
        activeDotIndex={activeIndex}
        dotElement={<CarouselDotElement />}
        inactiveDotElement={<CarouselDotElement />}
        containerStyle={styles.paginationContainer}
      />
    </View>
  );
};

export default HomeCarousel;
