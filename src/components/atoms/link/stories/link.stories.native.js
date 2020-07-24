import React from 'react';
import { MemoryRouter } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import { storiesOf } from '@storybook/react-native';
import i18n from 'services/i18n/';
import { action } from '@storybook/addon-actions';
import StoryPage, { DocItem } from 'storybook/story-components';
import { withKnobs, text } from '@storybook/addon-knobs';

import Link from '../';

storiesOf('Atoms/Link', module)
  .addDecorator(storyFn => (
    <StoryPage title="Link With Text" url="components/atoms/link" storyFn={storyFn}>
      Text Link description
    </StoryPage>
  ))
  .addDecorator(withKnobs)
  .add('Link with Text', () => (
    <DocItem
      example={{
        render: () => (
          <I18nextProvider i18n={i18n}>
            <MemoryRouter>
              <Link onPress={action('Link Pressed')} title={text('text', 'Text Link')} path={'/test'} />
            </MemoryRouter>
          </I18nextProvider>
        )
      }}
    />
  ));
