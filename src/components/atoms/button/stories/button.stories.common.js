import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Text } from 'react-native';
import Button from '../';

storiesOf('Button Shared', module)
  .add('with simple text', () => (
    <Button onPress={action('Clicked Button')} title={'Hello'}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('in red color', () => <Button onPress={action('Red Button Clicked')} title={'Red Button'} color="red"></Button>);
