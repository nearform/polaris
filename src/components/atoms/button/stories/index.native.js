import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Text } from 'react-native';
import Button from '../';

storiesOf('Button', module)
  .add('with simple text', () => (
    <Button onPress={action('clicked-text')} title={'Hello'}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('in red color', () => <Button onPress={action('red button clicked')} title={'Button'} color="red"></Button>);
