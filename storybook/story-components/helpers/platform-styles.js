import { Platform } from 'react-native';

/**
 * Shared story styles
 */
export const size = {
  xlarge: Platform.select({
    ios: 27,
    android: 27,
    default: '1.96875rem'
  }),
  large: Platform.select({
    ios: 18,
    android: 18,
    default: '1.3125rem'
  }),
  normal: Platform.select({
    ios: 14,
    android: 14,
    default: '1rem'
  }),
  small: Platform.select({
    ios: 12,
    android: 12,
    default: '0.8rem'
  }),
  xsmall: Platform.select({
    ios: 9,
    android: 9,
    default: '0.65625rem'
  })
};

export const fontFamily = {
  mono: Platform.select({
    ios: 'Menlo',
    android: 'monospace',
    default: 'monospace'
  })
};
