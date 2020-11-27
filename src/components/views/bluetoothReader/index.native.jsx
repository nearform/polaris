import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text } from 'react-native'
import Container from 'components/atoms/container'

export const Bluetooth = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Button
        title={t('bluetoothView:scanButton')}
        onPress={() =>
          scanForBluetooth({ title: t('bluetooth:defaultErrorMessage') })
        }
      />
    </Container>
  )
  function scanForBluetooth(message) {
    console.log('button pressed and nothing will happen : ' + message.title)
    return <Text>Nothing plumbed in yet</Text>
  }
}
