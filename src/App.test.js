import React from 'react';
import App from './App';
import { render } from 'react-native-testing-library';

describe('Main App', () => {
  it('renders without crashing', () => {
    const { toJSON } = render(<App />);
    const tree = toJSON();
    expect(tree).toBeDefined();
  });
});
