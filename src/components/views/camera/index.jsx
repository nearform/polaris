import * as React from 'react'
import { View, Text } from 'react-native'
import { Camera as ExpoCamera } from 'expo-camera'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import Container from 'components/atoms/container'
import { Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import * as Sharing from 'expo-sharing'

const Wrapper = styled.View`
  flex: 1;
  height: 100%;
`

const TakePictureButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 80px;
  background-color: #2165e3;
  height: 70px;
  width: 70px;
  z-index: 1;
  shadow-offset: 0 2px;
  shadow-radius: 2px;
  shadow-opacity: 0.5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  align-self: center;
`

const PhotoButtons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #2b343b;
  height: 70px;
`

const PhotoActionButton = styled.Text`
  padding: 20px 50px;
  color: #fff;
  font-size: 20px;
`

const ImageContainer = styled.Image`
  height: 100% !important;
  width: 100% !important;
`
const Display = styled.View`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-bottom: 70px;
`

export const Camera = () => {
  const { t } = useTranslation()
  const [hasPermission, setHasPermission] = React.useState(null)
  const [photo, setPhoto] = React.useState(null)
  const camera = React.createRef()

  const takePicture = async () => {
    try {
      const photo = await camera.current.takePictureAsync()
      setPhoto(photo)
    } catch (err) {
      console.log('Error while taking picture', err)
    }
  }

  const redirectImage = async () => {
    const isAvailable = await Sharing.isAvailableAsync()

    if (!isAvailable) {
      alert(`Uh oh, sharing isn't available on your platform`)
    }

    await Sharing.shareAsync(photo.uri)
    setPhoto(null)
  }

  React.useEffect(() => {
    ;(async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  if (hasPermission === null) {
    return <View />
  }

  if (hasPermission === false) {
    return (
      <Container>
        <Text>{t('camera:permissionDenied')}</Text>
      </Container>
    )
  }

  return !photo ? (
    <Wrapper>
      <ExpoCamera style={{ flex: 1 }} ref={camera}>
        <TakePictureButton onPress={takePicture}>
          <Icon name="camera-alt" color="#fff" />
        </TakePictureButton>
      </ExpoCamera>
    </Wrapper>
  ) : (
    <Wrapper>
      <Display>
        <ImageContainer source={{ uri: photo.uri }} />
        <PhotoButtons>
          <TouchableOpacity onPress={() => setPhoto(null)}>
            <PhotoActionButton>re-take</PhotoActionButton>
          </TouchableOpacity>
          <TouchableOpacity onPress={redirectImage}>
            <PhotoActionButton>forward</PhotoActionButton>
          </TouchableOpacity>
        </PhotoButtons>
      </Display>
    </Wrapper>
  )
}
