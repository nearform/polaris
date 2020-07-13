import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

export default function ButtonComponent({ onPress, title, color }) {
  return <Button onPress={onPress} title={title} color={color} />;
}

Button.defaultProps = {
  color: null,
  title: null,
  onPress: () => {}
};

Button.propTypes = {
  color: PropTypes.color,
  title: PropTypes.string,
  onPress: PropTypes.func
};
