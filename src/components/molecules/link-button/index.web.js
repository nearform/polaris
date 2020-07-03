import React from 'react';
import T from 'prop-types';

import Link from 'components/atoms/link';

// Temporary styles to allign with Native view
// TODO: apply cross-platform styles once styling approach is stable
const linkButtonStyle = {
  display: 'inline-block',
  padding: '12px',
  background: '#0790f2',
  color: '#FFFFFF',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontFamily: 'sans',
  borderRadius: '3px',
  boxShadow: '0px 2px 3px 3px rgba(0,0,0,0.1)'
};

// React Navigation `Link` and `useLinkProps` are currently "experimental" - investigate
// using those when they're stable - see https://reactnavigation.org/docs/link
const LinkButton = ({ path, title, ...props }) => {
  return <Link style={linkButtonStyle} path={path} title={title} {...props} />;
};

LinkButton.propTypes = {
  path: T.string.isRequired,
  title: T.string.isRequired
};

export default LinkButton;
