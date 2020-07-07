import React from 'react';
import { View, Button, Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import * as Notifications from 'expo-notifications';
import { styles } from '../views.styles';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true
  })
});

export const PushNotifications = () => {
  const [token, setToken] = React.useState(null);
  const { t } = useTranslation();

  const registerForPushNotificationsAsync = async () => {
    try {
      if (Constants.isDevice) {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert(t('pushNotificationsView:permissionsRejectedAlert'));
          return;
        }
        const res = await Notifications.getExpoPushTokenAsync();
        setToken(res.data);
      }
    } catch (e) {
      alert(e.message);
    }

    if (Platform.OS === 'android') {
      Notifications.createChannelAndroidAsync('default', {
        name: 'default',
        sound: true,
        priority: 'max',
        vibrate: [0, 250, 250, 250]
      });
    }
  };

  React.useEffect(() => {
    registerForPushNotificationsAsync();
  });

  return (
    <View style={styles.container}>
      <Button title={t('pushNotificationsView:sendNotificationButton')} onPress={() => sendPushNotification(token)} />
    </View>
  );
};

function sendPushNotification(expoPushToken) {
  const message = {
    to: expoPushToken,
    sound: 'default',
    title: 'Original Title',
    body: 'And here is the body!'
  };

  fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  });
}
