import React from 'react';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { UIProvider } from 'store';
import Header from '../nav.web';

afterEach(cleanup);

const initState = { theme: 'light', textColor: 'white', bgColor: 'black' };
const reducers = { toggleTheme: jest.fn() };

jest.mock('components/atoms/link', () => {});

describe('Navigation Header Web', () => {
  it('renders with 3 children', () => {
    const { toJSON } = render(
      <UIProvider value={[initState, reducers]}>
        <Header />
      </UIProvider>
    );
    const tree = toJSON();
    expect(tree.children.length).toBe(3);
  });

  it('should theme change on press works correctly', () => {
    const darkTheme = false;
    const reducer = {
      toggleTheme: jest.fn()
    };
    const { getByTestId } = render(
      <UIProvider value={[initState, reducer]}>
        <Header />
      </UIProvider>
    );

    const themeSwitch = getByTestId('theme-switch');
    fireEvent(themeSwitch, 'valueChange', darkTheme);
    expect(themeSwitch.props.value).toBe(darkTheme);
  });
});
