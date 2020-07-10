import React from 'react';
import { supportedLocales } from 'services/i18n';
import i18n from 'services/i18n/';
import StoryPage, { DocText, Description, DocItem } from 'storybook/story-components';

import LanguageSelector from '../';

const changeLanguage = lang => i18n.changeLanguage(lang);
const languages = Object.keys(supportedLocales).map(langCode => ({
  code: langCode,
  name: supportedLocales[langCode].name
}));

const currentLanguage = i18n.language;

export default {
  component: LanguageSelector,
  title: 'Atoms/Language Selector',
  decorators: [
    storyFn => (
      <StoryPage title="Language Selector" url="components/atoms/language-selector">
        <Description>
          <DocText>The component to switch between languages</DocText>
        </Description>
        {storyFn()}
      </StoryPage>
    )
  ]
};

export const linkWithText = () => (
  <DocItem
    example={{
      render: () => (
        <LanguageSelector changeLanguage={changeLanguage} languages={languages} currentLanguage={currentLanguage} />
      )
    }}
  />
);
