import React from 'react';
import { render } from 'react-native-testing-library';
import { HomeScreen } from '.';
import { ThemeProvider } from 'store';

describe('HomeScreen test', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    );
    const tree = toJSON();
    expect(tree).toBeDefined();
  });
});
