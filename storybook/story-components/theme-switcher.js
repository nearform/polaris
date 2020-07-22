import React from 'react';
import { css } from '@emotion/native';
import { useTheme } from 'emotion-theming';
import { ThemeActionsContext } from 'store';
import { Text, View, Switch } from 'react-native';

const wrapperStyle = css`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

const ThemeSwitcher = () => {
  const { toggleTheme } = React.useContext(ThemeActionsContext);
  const theme = useTheme();
  return (
    <View style={wrapperStyle}>
      <Text>Switch theme</Text>
      <Switch onValueChange={toggleTheme} value={theme.name !== 'light'} testID="theme-switch" />
    </View>
  );
};

export default ThemeSwitcher;
