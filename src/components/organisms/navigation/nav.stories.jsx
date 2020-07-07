import React from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from 'services/i18n/';
import { DocItem } from 'storybook/story-components';

import { MemoryRouter } from 'react-router';

import Header from './nav';

import { UIProvider } from 'store/ui/context';

export default {
  component: Header,
  title: 'Header'
};

export const header = () => (
  <DocItem
    example={{
      render: () => (
        <UIProvider>
          <I18nextProvider i18n={i18n}>
            <MemoryRouter>
              <Header t={text => text} selectedItems={['Statements', 'Direct Debits']} />
            </MemoryRouter>
          </I18nextProvider>
        </UIProvider>
      )
    }}
  />
);
