import React from 'react';
import { View } from 'react-native';
import { withTheme, Text } from '@stryberventures/stryber-react-native-ui-components';

import i18n from 'i18n';
import { ProjectThemeType } from 'styles/theme';
import useStyles from './styles';

interface IProgressBarProps {
  width?: number | string;
  spaceWidth?: number;
  style?: any;
  count?: number;
  currentStep: number;
  theme?: ProjectThemeType;
}

const ProgressBar: React.FC<IProgressBarProps> = ({
  width = 226,
  spaceWidth = 8,
  style,
  count = 3,
  currentStep,
  theme,
}) => {
  const styles = useStyles({
    theme,
    width,
    spaceWidth,
  });
  const stepArray = (new Array(count)).fill('');

  return (
    <View style={[styles.container, style]}>
      <View style={styles.content}>
        <Text style={styles.stepIndicator}>
          {`${i18n.t('components.progressBar.step')} ${currentStep + 1}/${count}`}
        </Text>
        <View style={styles.stepsContainer}>
          {
            stepArray.map((item, index) => (
              <View
                key={index}
                style={[
                  styles.step,
                  index <= currentStep ? styles.activeStep : {},
                ]}
              />
            ))
          }
        </View>
      </View>
    </View>
  );
};

export default withTheme(ProgressBar);
