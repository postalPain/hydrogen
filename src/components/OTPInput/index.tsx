import React, { useRef, forwardRef, useImperativeHandle } from 'react';
import { View, TextInput } from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';

import { ProjectThemeType } from 'theme';
import useStyles from './styles';

interface IOTPInputProps {
  theme?: ProjectThemeType;
  onFilled: (otp: string | null) => void;
  disabled?: boolean;
  style?: any;
}
interface IOTPInputRef {
  clear: () => void;
}

const INPUT_COUNT = 4;

const OTPInput: React.ForwardRefRenderFunction<IOTPInputRef, IOTPInputProps> = ({
  theme,
  onFilled,
  disabled = false,
  style = {},
}, ref) => {
  const styles = useStyles(theme);

  const inputValues = useRef(new Array(INPUT_COUNT).fill('')).current;
  const inputRefs = new Array(INPUT_COUNT);
  for (let i = 0; i < INPUT_COUNT; i++) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    inputRefs[i] = useRef();
  }

  useImperativeHandle(ref, () => ({
    clear: () => {
      inputRefs.forEach(inputRef => inputRef.current.clear());
      onFilled(null);
    },
  }));

  const onChangeTextHandler = (index: number, value: string) => {
    if (index < INPUT_COUNT - 1 && !!value) {
      inputRefs[index + 1].current.focus();
    }
    inputValues[index] = value;
    const otpValue = inputValues.filter(item => !!item).join('');
    onFilled(otpValue.length === INPUT_COUNT ? otpValue : null);
  };
  const onKeyPressHandler = (index: number, key: string) => {
    if (key === 'Backspace'
      && !inputValues[index].length
      && index !== 0
    ) {
      inputRefs[index - 1].current.focus();
    }
  };

  return (
    <View style={[styles.container, style]}>
      {
        inputRefs.map((inputRef, index) => (
          <TextInput
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            ref={inputRef}
            onChangeText={(text) => onChangeTextHandler(index, text)}
            onKeyPress={(e) => onKeyPressHandler(index, e.nativeEvent.key)}
            maxLength={1}
            keyboardType="number-pad"
            selectTextOnFocus
            editable={!disabled}
            style={styles.input}
          />
        ))
      }
    </View>
  );
};

export default withTheme(forwardRef(OTPInput));
