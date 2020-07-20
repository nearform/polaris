import React from 'react';
import { render, fireEvent, cleanup } from 'react-native-testing-library';
import { ThemeProvider } from 'store';
import Header from '../nav.web';

afterEach(cleanup);

describe('Navigation Header Web', () => {
  it('should theme change on press works correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <Header />
      </ThemeProvider>
    );

    const themeSwitch = getByTestId('theme-switch');
    expect(themeSwitch).toHaveProp('value', false);
    fireEvent(themeSwitch, 'valueChange');
    expect(themeSwitch).toHaveProp('value', true);
  });
});
