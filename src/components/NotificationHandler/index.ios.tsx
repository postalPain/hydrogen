import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIos from '@react-native-community/push-notification-ios';

const NotificationHandler: React.FC = () => {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      PushNotificationIos.addNotificationRequest({
        id: remoteMessage.messageId,
        body: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        userInfo: remoteMessage.data,
      });
    });

    return unsubscribe;
  }, []);

  return null;
};

export default NotificationHandler;
