import React from 'react';
import App from './App';
import { render, cleanup } from 'utils/test-utils';

afterEach(cleanup);

describe('Main App', () => {
  it('renders content including some links, without crashing', () => {
    const { queryAllByRole } = render(<App />);
    const links = queryAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
  });
});
