import React, { useContext, useState } from 'react';
import useStyles from './styles';
import { TouchableOpacity } from 'react-native';
import { Text, withTheme } from '@stryberventures/stryber-react-native-ui-components';
import { checkWorkingHours, getWorkingHoursMessage } from 'utilities/helpers';
import { ModalContext, ModalType } from 'components/ModalProvider';
import { useFocusEffect } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { warehouseIdSelector } from 'store/warehouse/selectors';
import { ProjectThemeType } from 'theme';
import i18n from 'i18n';

interface IClosedIndicatorProps {
  theme?: ProjectThemeType;
}

const ClosedIndicator: React.FC<IClosedIndicatorProps> = ({ theme }) => {
  const styles = useStyles(theme);
  const warehouseId = useSelector(warehouseIdSelector);
  const { setModalData } = useContext(ModalContext);

  const [isWorking, setIsWorking] = useState(true);
  const [willOpen, setWillOpen] = useState(null);

  const showWorkingHoursModal = () => {
    setModalData({
      layout: ModalType.default,
      title: i18n.t('modals.workingHoursModal.title'),
      description: getWorkingHoursMessage(willOpen),
    });
  };

  useFocusEffect(() => {
    (async () => {
      const { worksNow, openAt } = await checkWorkingHours(warehouseId);
      if (!worksNow) {
        setIsWorking(worksNow);
        setWillOpen(openAt);
      }
    })();
  });

  return !isWorking ? (
    <TouchableOpacity
      onPress={showWorkingHoursModal}
      activeOpacity={0.9}
      style={styles.insideButton}
    >
      <Text style={styles.insideButtonText}>{i18n.t('modals.workingHoursModal.closed')}</Text>
    </TouchableOpacity>
  )
    : null;
};

export default withTheme(ClosedIndicator);
