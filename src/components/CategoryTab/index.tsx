import React, { useEffect, useRef, useState } from 'react';
import { View, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { withTheme, Text } from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { ProjectThemeType } from 'styles/theme';
import { TCategory, TProduct } from 'services/ServerAPI/types';
import { processCategoryProductsForRender } from 'utilities/helpers';
import { productsByCategoryIdSelector, productsLoadingSelector, productsErrorSelector } from 'store/products/selectors';
import { getProductsByCategory } from 'store/products/actions';
import { TabMenu, ProductItem, ProductSlideUp } from 'components';
import useStyles from './styles';


interface ICategoryTabProps {
  theme?: ProjectThemeType;
  data: TCategory;
}

const CategoryTab: React.FC<ICategoryTabProps> = ({ theme, data }) => {
  const styles = useStyles(theme);
  const dispatch = useDispatch();
  const products = useSelector(productsByCategoryIdSelector(data.uuid));
  const productsLoading = useSelector(productsLoadingSelector(data.uuid));
  const productsError = useSelector(productsErrorSelector(data.uuid));
  const sectionHeaderPositions = useRef({});
  const sectionListItemDimensions = useRef({ header: 0, item: 0 });
  const productsListRef = useRef(null);
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(0);
  const [productSlideUpVisible, setProductSlideUpVisible] = useState(false);
  const [currentProductData, setCurrentProductData]: [TProduct, any] = useState(null);

  useEffect(() => {
    if (!products && !productsLoading) {
      dispatch(getProductsByCategory(data.uuid));
    }
  }, []);

  useEffect(() => {
    sectionHeaderPositions.current = {};
    setActiveMenuItemIndex(0);
  }, [products]);

  const menuItems = products ? products.map(subcategory => ({
    id: subcategory.uuid,
    title: subcategory.name,
  })) : [];

  const onProductShow = (p: TProduct) => {
    setCurrentProductData(p);
    setProductSlideUpVisible(true);
  };
  const onProductHide = () => {
    setProductSlideUpVisible(false);
    setCurrentProductData(null);
  };

  const onMenuItemPress = (index, _, isChangedByPropChange) => {
    const menuItem = menuItems[index];

    if (
      !isChangedByPropChange
      && sectionHeaderPositions.current
      && sectionHeaderPositions.current[menuItem.id]
    ) {
      productsListRef.current.scrollToIndex({
        index: sectionHeaderPositions.current[menuItem.id].index,
      });
    }
  };

  const onSectionHeaderLayout = (id, index, e) => {
    sectionHeaderPositions.current[id] = {
      offset: e.nativeEvent.layout.y,
      index,
      id,
    };
    sectionListItemDimensions.current.header = e.nativeEvent.layout.height;
  };
  const onProductsListScroll = (e) => {
    const checkPointOffset = e.nativeEvent.layoutMeasurement.height * 0.4;
    if (sectionHeaderPositions.current) {
      const headerPositions = Object.values(sectionHeaderPositions.current);
      if (headerPositions.length <= 1) {
        return;
      }

      const nearestHeader = Object.values(
        sectionHeaderPositions.current,
      ).map((productHeader) => ({
        // @ts-ignore
        ...productHeader,
        scrollDiff: productHeader.offset - e.nativeEvent.contentOffset.y - checkPointOffset,
      })).filter((item) => (
        item.scrollDiff <= 0
      )).reduce(
        (pItem, nItem) => (Math.abs(nItem.scrollDiff) < Math.abs(pItem.scrollDiff) ? nItem : pItem),
      );
      const menuItemIndex = menuItems.findIndex((item) => item.id === nearestHeader.id);
      if (activeMenuItemIndex !== menuItemIndex) {
        setActiveMenuItemIndex(menuItemIndex);
      }
    }
  };

  const onSectionItemLayout = (e) => {
    sectionListItemDimensions.current.item = e.nativeEvent.layout.height;
  };

  if (productsError) {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text>
            {productsError}
          </Text>
        </View>
      </View>
    );
  }

  if (productsLoading) {
    return (
      <View style={styles.container}>
        <View style={styles.messageBox}>
          <Text>
            {i18n.t('components.categoryTab.loading')}
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      { menuItems && (
        <TabMenu
          menuItems={menuItems}
          onPress={onMenuItemPress}
          rulerOffset={13}
          tabStyle={styles.tabBarTab}
          tabTextStyle={styles.tabBarLabel}
          tabTextActiveStyle={styles.tabBarLabelActive}
          containerStyle={styles.tabBar}
          activeTabIndex={activeMenuItemIndex}
        />
      )}
      { products && (
        <FlatList
          ref={productsListRef}
          data={processCategoryProductsForRender(products || [])}
          CellRendererComponent={({ children }) => <>{children}</>}
          renderItem={({ item, index }) => {
            if (item.type === 'header') {
              return (
                <View
                  key={item.key}
                  onLayout={(e) => onSectionHeaderLayout(item.uuid, index, e)}
                >
                  <Text style={styles.sectionTitle}>{item.name}</Text>
                </View>
              );
            }
            return (
              <View
                key={item.key}
                style={styles.productsRow}
                onLayout={onSectionItemLayout}
              >
                { item.listItemData.map((product) => (
                  <ProductItem
                    key={product.uuid}
                    data={product}
                    onPress={() => onProductShow(product)}
                  />
                ))}
              </View>
            );
          }}
          viewabilityConfig={{
            viewAreaCoveragePercentThreshold: 100,
          }}
          onScroll={onProductsListScroll}
          getItemLayout={(itemsData, index) => {
            const itemOffset = itemsData.slice(0, index).reduce((sum, item) => {
              const offset = item.type === 'header'
                ? sectionListItemDimensions.current.header
                : sectionListItemDimensions.current.item;
              return sum + offset;
            }, 0);
            const itemLength = itemsData[index].type === 'header'
              ? sectionListItemDimensions.current.header
              : sectionListItemDimensions.current.item;

            return (
              {
                length: itemLength,
                offset: itemOffset,
                index,
              }
            );
          }}
          scrollEventThrottle={0}
        />
      )}
      { currentProductData && (
        <ProductSlideUp
          visible={productSlideUpVisible}
          onClose={onProductHide}
          data={currentProductData}
        />
      )}
    </View>
  );
};

export default withTheme(CategoryTab);
