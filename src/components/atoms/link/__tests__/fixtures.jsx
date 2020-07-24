import React from 'react';
import { View, Text } from 'react-native';

import Link from '../index';

export const ScreenOne = () => {
  return (
    <View>
      <Text>Screen One</Text>
      <Link path="/two" title="Go to Two" />
      <Link path="/three" title="Go to Three" />
    </View>
  );
};

export const ScreenTwo = () => {
  return (
    <View>
      <Text>Screen Two</Text>
      <Link path="/three" title="Go to Three" />
    </View>
  );
};

export const ScreenThree = () => (
  <View>
    <Text>Screen Three</Text>
    <Link path="/one" title="Go to One" />
    <Link path="/three" title="Go to Three" />
  </View>
);

export const routes = [
  { path: '/one', name: 'One', View: ScreenOne },
  { path: '/two', name: 'Two', View: ScreenTwo },
  { path: '/three', name: 'Three', View: ScreenThree }
];

export const defaultPath = '/one';
