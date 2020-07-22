import * as React from 'react';
import { View, Text } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
import { useTranslation } from 'react-i18next';
import { css } from '@emotion/native';
import Container from 'components/atoms/container';

const stretchStyles = css`
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

  return (
    <View style={stretchStyles}>
      <ExpoCamera style={stretchStyles} type={ExpoCamera.Constants.Type.back} />
    </View>
  );
};
