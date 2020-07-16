import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';

export default function ButtonComponent({ onPress, title, color }) {
  return <Button onPress={onPress} title={title} color={color} />;
}

Button.defaultProps = {
  color: null
};

Button.propTypes = {
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};
