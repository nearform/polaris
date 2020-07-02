import React from 'react';
import App from './App';
import { render } from 'react-native-testing-library';

test('Main App renders without crashing', () => {
  const { toJSON } = render(<App />);
  const tree = toJSON();
  expect(tree).toBeDefined();
  expect(tree.children.length).toBe(1);
});
