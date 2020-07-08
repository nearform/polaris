import { addParameters } from '@storybook/react';
import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  isFullscreen: false,
  showPanel: true,
  theme: create({
    base: 'light',

    brandTitle: 'Polaris StoryBook'
  })
});

addParameters({
  info: {
    header: false,
    inline: true,
    source: true
  }
});
