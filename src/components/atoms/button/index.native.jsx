import React from 'react';
import { Button } from 'react-native';
import { useTheme } from 'emotion-theming';

export default props => {
  const theme = useTheme();
  return <Button color={theme.primary} {...props} />;
};
