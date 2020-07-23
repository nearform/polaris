import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Text, Switch } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from 'styled-components';
import { SafeView } from 'storybook/story-components-native';
import { ThemeProvider, ThemeActionsContext } from 'store';

import Button from '../';

const Container = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

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

storiesOf('Atoms/Button', module)
  .addDecorator(storyFn => (
    <ThemeProvider>
      <SafeView>{storyFn()}</SafeView>
    </ThemeProvider>
  ))
  .add('With Simple Text', () => (
    <Button onPress={action('Clicked Button')} title="Hello">
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('Themed Button', () => (
    <>
      <ThemeSwitcher />
      <Button title="Themed button" />
    </>
  ));
