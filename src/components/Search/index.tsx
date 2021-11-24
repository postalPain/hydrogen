import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { withTheme, Input, Text } from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { ProjectThemeType } from 'theme';

import useStyles from './styles';
import { Search as SearchIcon } from 'components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts } from 'store/search/actions';
import {
  searchErrorSelector,
  searchLoadingSelector,
  searchResultSelector,
} from 'store/search/selectors';
import { ProductItem, ProductSlideUp } from 'components/index';
import { TProduct } from 'services/ServerAPI/types';

interface ISearchProps {
  theme?: ProjectThemeType;
}

const Search: React.FC<ISearchProps> = ({
  theme,
}) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const searchResult = useSelector(searchResultSelector);
  const loading = useSelector(searchLoadingSelector);
  const error = useSelector(searchErrorSelector);
  const [currentProductData, setCurrentProductData]: [TProduct, any] = useState(null);
  const [productSlideUpVisible, setProductSlideUpVisible] = useState(false);

  const onProductShow = (p: TProduct) => {
    setCurrentProductData(p);
    setProductSlideUpVisible(true);
  };
  const onProductHide = () => {
    setProductSlideUpVisible(false);
    setCurrentProductData(null);
  };
  const [containerHeight, setContainerHeight] = useState(0);

  return (
    <>
      <View
        style={[styles.container, { height: containerHeight }]}
        onLayout={({ nativeEvent: { layout: { height } } }) => setContainerHeight(height)}
      >
        <Input
          icon={() => <SearchIcon height={18} width={18} fill="#666" />}
          variant="simple"
          style={styles.inputContainer}
          inputBoxStyle={styles.input}
          placeholder={i18n.t('screens.search.placeholder')}
          onSubmitEditing={({ nativeEvent: { text } }) => {
            if (text) {
              dispatch(searchProducts(text));
            }
          }}
          returnKeyType="search"
        />
        <ScrollView style={styles.resultContainer}>
          {loading && (
            <View style={styles.messageContainer}>
              <Text>{i18n.t('screens.search.loading')}</Text>
            </View>
          )}
          {!!(searchResult && !searchResult.length) && (
            <View style={styles.messageContainer}>
              <Text>{i18n.t('screens.search.empty')}</Text>
            </View>
          )}
          <View style={styles.productWrapper}>
            {!!(searchResult && searchResult?.length) && searchResult.map((product) => (
              <ProductItem
                key={product.uuid}
                data={product}
                onPress={() => onProductShow(product)}
              />
            ))}
          </View>
          {!!error && (
            <View style={styles.messageContainer}>
              <Text color="red">{error}</Text>
            </View>
          )}
        </ScrollView>
      </View>
      { currentProductData && (
        <ProductSlideUp
          visible={productSlideUpVisible}
          onClose={onProductHide}
          data={currentProductData}
        />
      )}
    </>
  );
};

export default withTheme(Search);
