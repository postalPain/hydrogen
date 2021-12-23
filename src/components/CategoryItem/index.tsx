import React, { useContext } from 'react';
import { TouchableOpacity, ImageBackground } from 'react-native';
import { Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';

import { TCategory } from 'services/ServerAPI/types';
import { navigate } from 'navigation/NavigationUtilities';
import useStyles from './styles';
import { Routes } from 'navigation';
import { WorkingHoursContext } from 'components/WorkingHoursProvider';
import { checkWorkingHours } from 'utilities/helpers';
import { trackEvent, TrackingEvent } from 'utilities/eventTracking';


const CategoryItem = ({ name, image_url, uuid }: TCategory) => {
  const styles = useStyles();
  const { setShowModal } = useContext(WorkingHoursContext);

  const onItemPress = async () => {
    const isWorkingHours = await checkWorkingHours();
    if (!isWorkingHours) {
      setShowModal(true);
    }
    navigate(Routes.TabNavigation, {
      screen: Routes.HomeTabScreen,
      params: {
        screen: Routes.ProductsScreen,
        params: {
          categoryId: uuid,
        },
      },
    });
    trackEvent(TrackingEvent.CategoryClicked, { category_name: name });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onItemPress}
      activeOpacity={0.7}
    >
      <ImageBackground
        source={{ uri: image_url }}
        style={styles.contentBox}
        imageStyle={styles.contentBoxImage}
      >
        <Text style={styles.label}>{name}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default withTheme(CategoryItem);
