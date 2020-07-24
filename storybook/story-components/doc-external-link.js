import React from 'react';
import T from 'prop-types';
import { Text, Linking, Platform, StyleSheet } from 'react-native';

/**
 * Displays a link to an external href
 */
const DocExternalLink = ({ children, href }) =>
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

DocExternalLink.propTypes = {
  children: T.node.isRequired,
  href: T.string.isRequired
};

export default DocExternalLink;
