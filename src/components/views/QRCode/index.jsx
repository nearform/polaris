import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import { Text, Button } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

const QRCodeText = styled.Text`
  text-align: center;
  padding-top: 20px;
  font-size: 30px;
`

const QRCodeContainer = styled.View`
  height: 100%;
`

export const QRCode = () => {
  const { t } = useTranslation()

  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const [QRData, setQRData] = useState('')

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true)
    setQRData(data)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <QRCodeContainer>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{
          height: '45%'
        }}
      />
      {scanned && (
        <Button
          title={t('qrCode:scanAgainButton')}
          onPress={() => [setScanned(false), setQRData(null)]}
        />
      )}
      <QRCodeText>{QRData}</QRCodeText>
    </QRCodeContainer>
  )
}
