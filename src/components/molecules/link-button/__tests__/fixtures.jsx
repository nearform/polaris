import React from 'react';
import { View, Text } from 'react-native';

import LinkButton from '../index';

export const ScreenOne = () => {
  return (
    <View>
      <Text>Screen One</Text>
      <LinkButton path="/two" title="Go to Two" />
      <LinkButton path="/three" title="Go to Three" />
    </View>
  );
};

export const ScreenTwo = () => {
  return (
    <View>
      <Text>Screen Two</Text>
      <LinkButton path="/three" title="Go to Three" />
    </View>
  );
};

export const ScreenThree = () => (
  <View>
    <Text>Screen Three</Text>
    <LinkButton path="/one" title="Go to One" />
    <LinkButton path="/three" title="Go to Three" />
  </View>
);

export const routes = [
  { path: '/one', name: 'One', View: ScreenOne },
  { path: '/two', name: 'Two', View: ScreenTwo },
  { path: '/three', name: 'Three', View: ScreenThree }
];

export const defaultPath = '/one';
