import React from 'react';
import { Button } from 'react-native';

import Link from 'components/atoms/link';

const LinkButton = props => {
  return <Link Component={Button} titleAsProp {...props} />;
};

export default LinkButton;
