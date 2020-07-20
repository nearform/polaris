import React from 'react';
import T from 'prop-types';
// import { Button } from 'react-native';

import Link from 'components/atoms/link';
import Button from 'components/atoms/button';
import usePlatformNavigation from 'utils/hooks/usePlatformNavigation';

// React Navigation `Link` and `useLinkProps` are currently "experimental" - investigate
// using those when they're stable - see https://reactnavigation.org/docs/link
const LinkButton = ({ path, params, ...rest }) => {
  const { navigate } = usePlatformNavigation();
  return <Link component={Button} path={path} onPress={() => navigate(path, params)} {...rest} />;
};

LinkButton.propTypes = {
  path: T.string.isRequired,
  params: T.object
};

export default LinkButton;
