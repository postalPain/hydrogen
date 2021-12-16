import React, { useEffect, useState } from 'react';
import VersionCheck from 'react-native-version-check';

import { UpdateAppModal } from 'components';
import { getItem, setItem } from 'services/LocalStorage';
import { storageKeys } from '../../constants';

interface IAppUpdateHandlerProps {

}

const AppUpdateHandler: React.FC<IAppUpdateHandlerProps> = () => {
  const [showUpdateAppModal, setShowUpdateAppModal] = useState(false);
  const [updateLink, setUpdateLink] = useState<string>(null);
  const [latestVersion, setLatestVersion] = useState<string>(null);

  useEffect(() => {
    (async () => {
      const latestCancelledVersion = await getItem(storageKeys.latestCancelledVersion);
      const needUpdate = await VersionCheck.needUpdate();
      if (needUpdate?.isNeeded && needUpdate?.latestVersion !== latestCancelledVersion) {
        setLatestVersion(needUpdate?.latestVersion);
        setUpdateLink(needUpdate?.storeUrl);
        setShowUpdateAppModal(true);
      }
    })();
  }, []);

  const cancelUpdate = () => {
    setItem(storageKeys.latestCancelledVersion, latestVersion);
    setShowUpdateAppModal(false);
  };

  return (
    <UpdateAppModal
      visible={showUpdateAppModal}
      updateURL={updateLink}
      onClose={cancelUpdate}
    />
  );
};

export default AppUpdateHandler;
