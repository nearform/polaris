import { bool } from 'prop-types';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { size } from './platform-styles';

class DocText extends React.PureComponent {
  static contextTypes = {
    isInAParentText: bool
  };

  render() {
    const { accessibilityRole, style, ...rest } = this.props;
    const isInAParentText = this.context;
    return (
      <Text
        {...rest}
        accessibilityRole={rest.href ? 'link' : accessibilityRole}
        style={[!isInAParentText && styles.baseText, style, rest.href && styles.link]}
      />
    );
  }
}

export default DocText;

const styles = StyleSheet.create({
  baseText: {
    fontSize: size.normal,
    lineHeight: size.large
  },
  link: {
    color: '#1B95E0',
    marginTop: size.xsmall,
    textDecorationLine: 'underline'
  }
});
