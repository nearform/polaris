import React from 'react';
import { HomeScreen } from '.';
import { renderAsRoute, cleanup } from 'utils/test-utils';

afterEach(cleanup);

describe('HomeScreen test', () => {
  it('renders some links without crashing', () => {
    const { queryAllByRole } = renderAsRoute(<HomeScreen />);
    const links = queryAllByRole('link');
    expect(links.length).toBeGreaterThan(1);
  });
});
