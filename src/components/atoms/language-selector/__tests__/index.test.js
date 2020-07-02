import React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import { LanguageSelector } from '../index.web';

const mocks = {
  changeLanguage: jest.fn(),
  languages: ['en', 'it'],
  currentLanguage: ['en']
};

describe('Language Selector', () => {
  it('changeLanguage to be called on languages change', () => {
    const { changeLanguage, languages, currentLanguage } = mocks;
    const { getByTestId } = render(
      <LanguageSelector changeLanguage={changeLanguage} languages={languages} currentLanguage={currentLanguage} />
    );
    const languagePicker = getByTestId('language-selector');
    fireEvent(languagePicker, 'valueChange');
    expect(changeLanguage).toBeCalled();
  });
});
