import React from 'react';
import { render } from 'react-native-testing-library';
import { UIProvider } from 'store';
import Header from '../nav.native';

const initialState = { theme: 'light', textColor: 'white', bgColor: 'black' };
const reducers = { toggleTheme: jest.fn() };

describe('Navigation Header Native', () => {
  it('renders with 4 children', () => {
    const { toJSON } = render(
      <UIProvider value={[initialState, reducers]}>
        <Header />
      </UIProvider>
    );
    const tree = toJSON();
    expect(tree.children.length).toBe(4);
  });
});
