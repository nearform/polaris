import React from 'react';
import { Button } from 'react-native';
import { useTheme } from 'styled-components';

export default props => {
  const theme = useTheme();
  return <Button color={theme.primary} {...props} />;
};
