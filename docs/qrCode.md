# QR Code integration

Polaris uses `Expo bar code scanner` that provides a React component that renders a viewfinder for the device's camera and will scan bar codes that show up in the frame.

## Configuration

In managed apps, scanning barcodes with the camera requires the Camera Permission.

You must request permission to access the user's camera before attempting to get it. To do this, you will want to use the Permissions API, for example:

```js
import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import { Text, Button, View } from 'react-native'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function App() {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    ;(async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true)
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={{ height: "100%" }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={{ height: '45%' }}
      />
      {scanned && (
        <Button
          title="Scan Again"
          onPress={() => setScanned(false)}
        />
      )}
    </View>
  )
}
```

Passing undefined to the onBarCodeScanned prop will result in no scanning. This can be used to effectively "pause" the scanner so that it doesn't continually scan even after data has been retrieved.
