import React from 'react';
import T from 'prop-types';
import { StyleSheet, Text } from 'react-native';
import { size } from './helpers/platform-styles';
import DocExternalLink from './doc-external-link';

/**
 * A text element with accessabilityRole or a link
 */
class DocText extends React.PureComponent {
  static contextTypes = {
    isInAParentText: T.bool
  };

  render() {
    const { accessibilityRole, style, ...rest } = this.props;
    const isInAParentText = this.context;

    return rest.href ? (
      <DocExternalLink {...this.props} />
    ) : (
      <Text {...rest} accessibilityRole={accessibilityRole} style={[!isInAParentText && styles.baseText, style]} />
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontSize: size.normal,
    lineHeight: size.large
  }
});

DocText.propTypes = {
  children: T.node.isRequired,
  accessibilityRole: T.string,
  href: T.string,
  style: T.object
};

export default DocText;
