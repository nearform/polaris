import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Text, View, Switch } from 'react-native';
import { css } from '@emotion/native';
import { useTheme } from 'emotion-theming';
import { SafeView } from 'storybook/story-components-native';
import { ThemeProvider, ThemeActionsContext } from 'store';

import Button from '../';

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
  .add('Red Color', () => <Button onPress={action('Red Button Clicked')} title="Red Button" color="red"></Button>)
  .add('Themed Button', () => (
    <>
      <ThemeSwitcher />
      <Button title="Themed button" />
    </>
  ));
