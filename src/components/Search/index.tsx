import React, { useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { withTheme, Input, Text } from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { ProjectThemeType } from 'theme';

import useStyles from './styles';
import { Search as SearchIcon } from 'components/Icons';
import { useDispatch, useSelector } from 'react-redux';
import { searchProducts, searchProductsNextPage } from 'store/search/actions';
import {
  searchErrorSelector, searchLastPageSelector,
  searchLoadingSelector,
  searchResultSelector,
} from 'store/search/selectors';
import { ProductItem, ProductSlideUp } from 'components/index';
import { TProduct } from 'services/ServerAPI/types';
import { trackEvent, TrackingEvent } from 'utilities/eventTracking';
import { useEffectUpdate } from 'utilities/hooks';

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
  const lastPage = useSelector(searchLastPageSelector);
  const [currentProductData, setCurrentProductData]: [TProduct, any] = useState(null);
  const [productSlideUpVisible, setProductSlideUpVisible] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  const onProductShow = (p: TProduct) => {
    setCurrentProductData(p);
    setProductSlideUpVisible(true);
  };
  const onProductHide = () => {
    setProductSlideUpVisible(false);
    setCurrentProductData(null);
  };
  const [containerHeight, setContainerHeight] = useState(0);

  useEffectUpdate(useCallback(() => {
    if (lastPage >= page && page !== 1) {
      dispatch(searchProductsNextPage(searchQuery, page));
    }
  }, [page]));

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
          onChange={(text) => setSearchQuery(text)}
          onSubmitEditing={() => {
            if (searchQuery) {
              dispatch(searchProducts(searchQuery));
              setPage(1);
              trackEvent(TrackingEvent.SearchInput, { search_query: searchQuery });
            }
          }}
          returnKeyType="search"
        />
        <View style={styles.resultContainer}>
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
          <FlatList
            contentContainerStyle={styles.productWrapper}
            data={searchResult}
            keyExtractor={(product) => product.uuid}
            numColumns={3}
            renderItem={({ item }) => (
              <ProductItem
                data={item}
                onPress={() => onProductShow(item)}
              />
            )}
            onEndReached={() => setPage((prevPage) => prevPage + 1)}
            onEndReachedThreshold={0.5}
          />
          {!!error && (
            <View style={styles.messageContainer}>
              <Text color="red">{error}</Text>
            </View>
          )}
        </View>
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
