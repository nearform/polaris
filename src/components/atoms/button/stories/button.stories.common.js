import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Text } from 'react-native';
import Button from '../';

storiesOf('Button', module)
  .add('With Simple Text', () => (
    <Button onPress={action('Clicked Button')} title={'Hello'}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('Red Color', () => <Button onPress={action('Red Button Clicked')} title={'Red Button'} color="red"></Button>);
