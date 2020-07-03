import React from 'react';
import T from 'prop-types';

import { Button } from 'react-native';
import Link from 'components/atoms/link';

const LinkButton = ({ path, title, ...props }) => {
  return <Link Component={Button} path={path} title={title} titleAsProp {...props} />;
};

LinkButton.propTypes = {
  path: T.string.isRequired,
  title: T.string.isRequired
};

export default LinkButton;
