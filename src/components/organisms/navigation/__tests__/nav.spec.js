import React from 'react';
import { render, cleanup } from 'react-native-testing-library';
import Header from '../nav.web';

afterEach(cleanup);

const renderComponent = () => {
  const UIContext = React.createContext();

  const state = { theme: 'light', textColor: 'white', bgColor: 'black' };
  const reducers = { toggleTheme: jest.fn() };
  return render(
    <UIContext.Provider value={[state, reducers]}>
      <Header />
    </UIContext.Provider>
  );
};

describe('Header', () => {
  it('renders with center text', () => {
    const { debug } = renderComponent();
    // console.log('queryByText', queryByText);
    debug();
    // expect(queryByText('Top Center')).not.toBeNull();
  });
});
