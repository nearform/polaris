import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

export default function ButtonComponent({ onPress, title }) {
  return <Button onPress={onPress} title={title} />;
}

Button.defaultProps = {
  title: null,
  onPress: () => {}
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};
