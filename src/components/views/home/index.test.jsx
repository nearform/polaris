import React from 'react';
import { HomeScreen } from '.';
import { render } from 'react-native-testing-library';

describe('HomeScreen test', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(<HomeScreen />);
    const tree = toJSON();
    expect(tree).toBeDefined();
  });
});
