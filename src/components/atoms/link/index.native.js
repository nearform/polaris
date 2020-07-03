import React from 'react';
import T from 'prop-types';

import { Text, TouchableOpacity } from 'react-native';
import usePlatformNavigation from 'utils/hooks/usePlatformNavigation';

const Link = ({ path, title, params, style, Component = TouchableOpacity, titleAsProp }) => {
  const { navigate } = usePlatformNavigation();
  return (
    <Component style={style} title={titleAsProp ? title : null} onPress={() => navigate(path, params)}>
      {titleAsProp ? null : <Text>{title}</Text>}
    </Component>
  );
};

Link.propTypes = {
  path: T.string.isRequired,
  title: T.string.isRequired,
  params: T.object,
  style: T.object,
  Component: T.elementType,
  titleAsProp: T.bool
};

export default Link;
