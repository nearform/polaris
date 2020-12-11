import * as React from 'react'
import { Platform } from 'react-native'
import { useTranslation } from 'react-i18next'
import { useTheme } from 'styled-components'
import NearformLogo from 'assets/logos/nearform.svg'
import Container from 'components/atoms/container'
import LinkButton from 'components/molecules/link-button'

export const HomeScreen = () => {
  const { t } = useTranslation()
  const theme = useTheme()

  return (
    <Container>
      <NearformLogo
        width={200}
        height={50}
        fill={theme.colors.primary}
        title="Nearform logo"
      />
      <LinkButton title={t('home:viewOneButton')} path="/viewOne" />
      <LinkButton title={t('home:viewTwoButton')} path="/viewTwo" />
      <LinkButton title={t('home:viewThreeButton')} path="/viewThree" />
      <LinkButton title={t('home:listViewButton')} path="/listView" />
      {Platform.OS !== 'web' && (
        <LinkButton title={t('home:cameraButton')} path="/camera" />
      )}
      <LinkButton
        title={t('home:pushNotificationsButton')}
        path="/pushNotifications"
      />
      <LinkButton title={t('home:responsiveButton')} path="/responsive" />
      <LinkButton title={t('home:authButton')} path="/auth" />
      {Platform.OS !== 'web' && (
        <>
          <LinkButton title={t('home:qrCodeButton')} path="/qrCode" />
          <LinkButton title={t('home:mapButton')} path="/map" />
        </>
      )}
    </Container>
  )
}
