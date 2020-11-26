module.exports = {
  stories: [
    '../../src/**/*.stories.js',
    '../../src/**/stories/*.web.js',
    '../../src/**/stories/*.common.js',
    '../../storybook/story-components/**/stories/*.common.js'
  ],
  addons: [
    '@storybook/addon-actions/register',
    '@storybook/addon-knobs/register'
  ]
}
