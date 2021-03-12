import * as React from 'react'
import { Platform, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import styled, { useTheme } from 'styled-components'
import NearformLogo from 'assets/logos/nearform.svg'
import Container from 'components/atoms/container'
import LinkButton from 'components/molecules/link-button'

const StyledLinkButton = styled(LinkButton)`
  margin-top: 10px;
`

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
      
      <StyledLinkButton title={t('home:simpleButton')} path="/simple" />
      <StyledLinkButton title={t('home:listViewButton')} path="/listView" />
      {Platform.OS !== 'web' && (
        <StyledLinkButton title={t('home:cameraButton')} path="/camera" />
      )}
      <StyledLinkButton
        title={t('home:pushNotificationsButton')}
        path="/pushNotifications"
      />
      <StyledLinkButton title={t('home:responsiveButton')} path="/responsive" />
      <StyledLinkButton title={t('home:authButton')} path="/auth" />
      {Platform.OS !== 'web' && (
        <>
          <StyledLinkButton title={t('home:qrCodeButton')} path="/qrCode" />
          <StyledLinkButton title={t('home:mapButton')} path="/map" />
        </>
      )}
      <Text testID="welcome">Text for tests</Text>
    </Container>
  )
}
