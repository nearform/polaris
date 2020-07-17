import React from 'react';
import { Platform, View, Text } from 'react-native';

import { prettyOutput, queryAllDescendents } from 'utils/test-utils/platform-utils';

import { render } from 'utils/test-utils/testing-library';
import { DeepNestedView, SimpleView } from './fixtures';

describe('test utils: prettyOutput', () => {
  it('outputs simple tree as text', () => {
    const { container } = render(<SimpleView />);
    const prettified = prettyOutput(container);

    const expectedNativeStrings = ['<View>', '<Text>', 'Example text', '</Text>', '</View>'];
    const expectedWebStrings = ['<div', 'Example text', '</div>'];
    const expectedStrings = Platform.OS === 'web' ? expectedWebStrings : expectedNativeStrings;

    for (const str of expectedStrings) {
      expect(prettified).toContain(str);
    }
  });
});

describe('test utils: queryAllDescendents', () => {
  it('gets matching descendents', () => {
    const { container } = render(<DeepNestedView />);

    const idTypes = { nativeProp: 'nativeID', webAttr: 'id' };

    const outerMatches = queryAllDescendents(container, { value: 'outer', ...idTypes });
    expect(outerMatches).toHaveLength(1);

    const childlessMatches = queryAllDescendents(container, { value: 'childless', ...idTypes });
    expect(childlessMatches).toHaveLength(1);

    const innerMatches = queryAllDescendents(outerMatches[0], { value: 'inner', ...idTypes });
    expect(innerMatches).toHaveLength(1);

    const noMatches = queryAllDescendents(childlessMatches[0], { value: 'inner', ...idTypes });
    expect(noMatches).toHaveLength(0);

    // match "inner" and "outer"
    const wildcardMatches = queryAllDescendents(container, { value: 'er', matchType: '$', ...idTypes });
    expect(wildcardMatches).toHaveLength(2);
  });
})
