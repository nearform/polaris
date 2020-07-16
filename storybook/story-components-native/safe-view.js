import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';

// SafeAreaView handles iOS, the custom style handles android
const SafeView = ({ children }) => <SafeAreaView style={styles.AndroidSafeArea}>{children}</SafeAreaView>;

const styles = StyleSheet.create({
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});

export default SafeView;
