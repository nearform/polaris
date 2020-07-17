import React from 'react';
import { Button } from 'react-native';
import { useTranslation } from 'react-i18next';
import Container from 'components/atoms/container';

export const PushNotifications = () => {
  const { t } = useTranslation();

  const registerForPushNotificationsWeb = async () => {
    const serviceWorkerRegistration = await navigator.serviceWorker.ready;
    try {
      await serviceWorkerRegistration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: process.env.VAPID_PUBLIC_KEY
      });
    } catch (e) {
      console.info(t('pushNotificationsView:invalidVapidKey'));
    }
  };

  React.useEffect(() => {
    registerForPushNotificationsWeb();
  });

  return (
    <Container>
      <Button
        title={t('pushNotificationsView:sendNotificationButton')}
        onPress={() => sendPushNotification(t('pushNotificationsView:messageBody'))}
      />
    </Container>
  );
};

async function sendPushNotification(message) {
  const serviceWorkerRegistration = await navigator.serviceWorker.ready;
  const subscription = await serviceWorkerRegistration.pushManager.getSubscription();

  const body = {
    subscription,
    message
  };

  fetch('http://localhost:3000/push', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
}
