import * as React from 'react'
import { Text } from 'react-native'
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
        fill={theme.primary}
        title="Nearform logo"
      />
      <Text style={{ padding: 10 }}>{t('home:chooseACountry')}</Text>
      <LinkButton title={t('geography:spain')} path="/spain" />
    </Container>
  )
}
