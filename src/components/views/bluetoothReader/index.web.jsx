import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native'
import Container from 'components/atoms/container'

export const Bluetooth = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Button
        title={t('bluetoothView:scanButton')}
        onPress={() => console.log('button pressed and nothing will happen')}
      />
    </Container>
  )
}
