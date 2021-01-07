import * as React from 'react'
import { Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import Container from 'components/atoms/container'

export const Simple = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Text>{t('simple:message')}</Text>
    </Container>
  )
}
