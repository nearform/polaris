import React from 'react';
import { Text, Linking, Platform, StyleSheet } from 'react-native';

const DocExternalLink = ({ href, children }) =>
  Platform.OS === 'ios' || Platform.OS === 'android' ? (
    <Text style={styles.link} accessibilityRole="link" onPress={() => Linking.openURL(href)}>
      {children}
    </Text>
  ) : (
    <Text style={styles.link} accessibilityRole="link" href={href} target="_blank">
      {children}
    </Text>
  );

const styles = StyleSheet.create({
  link: {
    color: '#0000EE',
    textDecorationLine: 'underline'
  }
});

export default DocExternalLink;
