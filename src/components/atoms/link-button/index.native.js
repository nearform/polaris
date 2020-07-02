import React from 'react';
import T from 'prop-types';

import { Button } from 'react-native';
import usePlatformNavigation from 'hooks/usePlatformNavigation';

const LinkButton = ({ path, title, params }) => {
  const { navigate } = usePlatformNavigation();
  return <Button title={title} onPress={() => navigate(path, params)} />;
};

LinkButton.propTypes = {
  path: T.string.isRequired,
  title: T.string.isRequired,
  params: T.object
};

export default LinkButton;
