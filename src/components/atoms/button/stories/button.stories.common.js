import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Text, View } from 'react-native';

import Button from '../';

storiesOf('Atoms/Button', module)
  .addDecorator(storyFn => (
    <View>
      {storyFn()}
      <View>
        <Text style={{ textAlign: 'center' }}>Native Button</Text>
      </View>
    </View>
  ))
  .add('With Simple Text', () => (
    <Button onPress={action('Clicked Button')} title={'Hello'}>
      <Text>Hello Button</Text>
    </Button>
  ))
  .add('Red Color', () => <Button onPress={action('Red Button Clicked')} title={'Red Button'} color="red"></Button>);
