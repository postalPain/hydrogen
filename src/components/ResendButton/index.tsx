import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { withTheme } from '@stryberventures/stryber-react-native-ui-components';

import { ProjectThemeType } from 'theme';
import i18n from 'i18n';
import { formatAwaitTime, getValueByInterval } from 'utilities/helpers';
import useStyles from './styles';

interface IResendButtonProps {
  theme?: ProjectThemeType;
  style?: any;
  time?: number;
  activeInitially?: boolean;
  onPress: () => void;
}

const ResendButton: React.FC<IResendButtonProps> = ({
  theme,
  style,
  time = 30000,
  activeInitially = false,
  onPress,
}) => {
  const styles = useStyles(theme);
  const [active, setActive] = useState(activeInitially);
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    if (!active) {
      getValueByInterval((value, isLast) => {
        setTimePassed(value);
        if (isLast) {
          setActive(true);
        }
      }, {
        startValue: time,
        endValue: 0,
        stepValue: 1000,
        stepDuration: 1000,
      });
    }
  }, [active]);

  const onPressHandler = () => {
    setActive(false);
    onPress();
  };

  if (!active) {
    return (
      <View style={[styles.containerCounter, style]}>
        <Text style={styles.counterText}>
          {i18n.t('components.resendButton.countDownText', { time: formatAwaitTime(timePassed) })}
        </Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.containerButton, style]}
      onPress={onPressHandler}
      disabled={!active}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>
        {i18n.t('components.resendButton.buttonText')}
      </Text>
    </TouchableOpacity>
  );
};

export default withTheme(ResendButton);
