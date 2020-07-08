import React from 'react';
import DocText from './doc-text';

const DocLink = props => <DocText {...props} accessibilityRole="link" target="_blank" />;

export default DocLink;
