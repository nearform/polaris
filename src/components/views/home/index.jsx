import * as React from 'react';
import { Platform } from 'react-native';
import { useTranslation } from 'react-i18next';
import NearformLogo from 'assets/logos/nearform.svg';
import Container from 'components/atoms/container';
import LinkButton from 'components/molecules/link-button';

export const HomeScreen = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <NearformLogo width={200} height={50} fill="#2165e3" title="Nearform logo" />
      <LinkButton title={t('home:viewOneButton')} path="/viewOne" />
      <LinkButton title={t('home:viewTwoButton')} path="/viewTwo" />
      <LinkButton title={t('home:viewThreeButton')} path="/viewThree" />
      <LinkButton title={t('home:listViewButton')} path="/listView" />
      {Platform.OS !== 'web' && <LinkButton title={t('home:cameraButton')} path="/camera" />}
      <LinkButton title={t('home:pushNotificationsButton')} path="/pushNotifications" />
    </Container>
  );
};
