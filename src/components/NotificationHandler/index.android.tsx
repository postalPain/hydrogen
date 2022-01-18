import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

const NotificationHandler: React.FC = () => {
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'android-notification',
        channelName: 'Android Notification',
      },
    );

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      PushNotification.localNotification({
        channelId: 'android-notification',
        message: remoteMessage.notification.body,
        title: remoteMessage.notification.title,
        bigPictureUrl: remoteMessage.notification.android.imageUrl,
        smallIcon: remoteMessage.notification.android.imageUrl,
      });
    });
    return unsubscribe;
  }, []);

  return null;
};

export default NotificationHandler;
