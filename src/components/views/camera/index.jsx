import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Camera as ExpoCamera } from 'expo-camera';
import { useTranslation } from 'react-i18next';
import { styles as commonStyles } from '../views.styles';

const styles = StyleSheet.create({
  container: { flex: 1 }
});

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
      <View style={commonStyles.container}>
        <Text>{t('camera:permissionDenied')}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ExpoCamera style={styles.container} type={ExpoCamera.Constants.Type.back} />
    </View>
  );
};
