import * as React from 'react'
import { Text, StatusBar } from 'react-native'
import { useTranslation } from 'react-i18next'
import Container from 'components/atoms/container'
import usePlatformLocation from 'utils/hooks/usePlatformLocation'

export const View404 = () => {
  const { t } = useTranslation()

  const currentRoute = usePlatformLocation()
  const path = currentRoute ? currentRoute.path : ''
  return (
    <Container>
      <StatusBar style="auto" />
      <Text>{t('errors:404', { path: path ? `${path} ` : '' })}</Text>
    </Container>
  )
}
