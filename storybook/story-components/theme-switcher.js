import React from 'react';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
import { ThemeActionsContext } from 'store';
import { Text, Switch } from 'react-native';

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;
/**
 * Displays a toggle to switch the theme on/off
 */
const ThemeSwitcher = () => {
  const { toggleTheme } = React.useContext(ThemeActionsContext);
  const theme = useTheme();
  return (
    <Container>
      <Text>Switch theme</Text>
      <Switch onValueChange={toggleTheme} value={theme.name !== 'light'} testID="theme-switch" />
    </Container>
  );
};

export default ThemeSwitcher;
