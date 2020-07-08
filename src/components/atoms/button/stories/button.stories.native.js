import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Text } from 'react-native';
import Button from '../';

storiesOf('Button Native', module).add('with text', () => (
  <Button onPress={action('Clicked Button')} title={'Hello'}>
    <Text>Hello Button</Text>
  </Button>
));
