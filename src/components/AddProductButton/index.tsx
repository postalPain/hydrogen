import React, { useRef } from 'react';
import { ButtonCounter, Text } from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { formatCurrency } from 'utilities/helpers';
import useStyles from './styles';

interface IAddProductButton {
  price: number;
  onCountChange: (count: number, added: number) => void;
  initialValue?: number;
}

const AddProductButton = ({ price, onCountChange, initialValue }: IAddProductButton) => {
  const styles = useStyles();
  const prevCount = useRef(initialValue);
  const onCountChangeHandler = (count) => {
    const increment = count - prevCount.current;
    prevCount.current = count;
    onCountChange(count, increment);
  };

  return (
    <ButtonCounter
      renderCount={(count, style) => (
        <Text style={style}>
          {formatCurrency(price)}
          <Text style={[style, styles.countText]}>{` x ${count}`}</Text>
        </Text>
      )}
      onCountChange={onCountChangeHandler}
      initialValue={initialValue}
    >
      {i18n.t('components.addProductButton.addItem')}
    </ButtonCounter>
  );
};
AddProductButton.defaultProps = {
  initialValue: 0,
};

export default AddProductButton;
