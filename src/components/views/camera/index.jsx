import * as React from 'react';
import { View, Text } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components/native';
import Container from 'components/atoms/container';

const Wrapper = styled.View`
  flex: 1;
`;

export const Camera = () => {
  const { t } = useTranslation();
  const [hasPermission, setHasPermission] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      const { status } = await ExpoCamera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <Container>
        <Text>{t('camera:permissionDenied')}</Text>
      </Container>
    );
  }

  return <Wrapper as={ExpoCamera} type={ExpoCamera.Constants.Type.back} />;
};
