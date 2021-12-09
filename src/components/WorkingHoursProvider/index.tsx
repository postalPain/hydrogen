import React, { useState } from 'react';

type WorkingHoursContextType = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
};

export const WorkingHoursContext = React.createContext<WorkingHoursContextType>(null);

const WorkingHoursProvider: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <WorkingHoursContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </WorkingHoursContext.Provider>
  );
};

export default WorkingHoursProvider;
