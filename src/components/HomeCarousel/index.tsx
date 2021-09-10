import React, { useState } from 'react';
import { View } from 'react-native';
import { CacheImage } from '@stryberventures/stryber-react-native-ui-components';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { CarouselDotElement } from 'components';
import useStyles from './styles';


interface IHomeCarousel {
  style?: any;
}

const HomeCarousel: React.FC<IHomeCarousel> = ({ style = {} }) => {
  const styles = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  // mocked values(will be changed in future)
  const carouselItems = [
    {
      imgUrl: 'https://png.pngtree.com/background/20210706/original/pngtree-business-technology-background-banner-design-picture-image_188904.jpg',
    },
    {
      imgUrl: 'https://png.pngtree.com/background/20210709/original/pngtree-business-technology-background-material-picture-image_415908.jpg',
    },
    {
      imgUrl: 'https://png.pngtree.com/background/20210706/original/pngtree-triangle-geometry-black-background-picture-image_141561.jpg',
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <View style={styles.imageBannerWrapper}>
        <CacheImage
          source={{ uri: item.imgUrl }}
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
