import React, { useContext } from 'react';
import { WorkingHoursContext } from 'components/WorkingHoursProvider';
import WorkingHoursModal from '../WorkingHoursModal';

interface IWorkingHoursHandlerProps {

}

const WorkingHoursHandler: React.FC<IWorkingHoursHandlerProps> = () => {
  const { showModal, setShowModal } = useContext(WorkingHoursContext);
  return (
    <WorkingHoursModal
      visible={showModal}
      onClose={() => setShowModal(false)}
    />
  );
};

export default WorkingHoursHandler;
