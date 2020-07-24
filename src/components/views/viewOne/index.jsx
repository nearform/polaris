import * as React from 'react'
import { Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import Container from 'components/atoms/container'

export const ViewOne = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Text>{t('viewOne:message')}</Text>
    </Container>
  )
}
