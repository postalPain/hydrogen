import React from 'react';
import useStyles from './styles';
import { View, Text } from 'react-native';

import i18n from 'i18n';
import { TCategory } from 'services/ServerAPI/types';
import CategoryItem from 'components/CategoryItem';

interface ICategoriesViewer {
  data: TCategory[],
}

const CategoriesViewer = ({ data }: ICategoriesViewer) => {
  const styles = useStyles();

  if (!data || !data.length) {
    return (
      <View style={styles.emptyListBox}>
        <Text style={styles.emptyListText}>{ i18n.t('components.categoriesViewer.emptyList')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      { data.map((item) => <CategoryItem {...item} key={item.uuid} />)}
    </View>
  );
};

export default CategoriesViewer;
