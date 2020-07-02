import React, { useContext } from 'react';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { renderHook } from '@testing-library/react-hooks';
import { UIProvider } from 'store';
import Header from '../nav.web';

afterEach(cleanup);

const initState = { theme: 'light', textColor: 'white', bgColor: 'black' };
const reducers = { toggleTheme: jest.fn() };

describe('Navigation Header Web', () => {
  it('has context default state', () => {
    const UIContext = React.createContext();
    const wrapper = ({ children }) => <UIContext.Provider value={initState}>{children}</UIContext.Provider>;
    const { result } = renderHook(() => useContext(UIContext), { wrapper });
    expect(result.current).toStrictEqual(initState);
  });

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
