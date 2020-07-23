import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import { Text, View } from 'react-native';
import { SafeView } from 'storybook/story-components-native';

import Button from '../';
import { ThemeProvider } from 'store';

storiesOf('Atoms/Button', module)
  .addDecorator(storyFn => (
    <ThemeProvider>
      <SafeView>
        {storyFn()}
        <View>
          <Text style={{ textAlign: 'center' }}>Native Button</Text>
        </View>
      </SafeView>
    </ThemeProvider>
  ))
  .add('Red Color', () => <Button onPress={action('Red Button Clicked')} title="Red Button" color="red"></Button>);
