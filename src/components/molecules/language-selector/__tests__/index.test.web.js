import React from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'
import { act, render, fireEvent } from 'react-native-testing-library'

import LanguageSelector from '../index'

const LanguageTestContainer = () => {
  const { i18n } = useTranslation()
  return (
    <View>
      <LanguageSelector />
      <Text>langcode: {i18n.language}</Text>
    </View>
  )
}

describe('Language Selector', () => {
  it('updates useTranslation consumers with new i18n langcode on value change', async () => {
    const { getByTestId, queryAllByText } = render(<LanguageTestContainer />)
    const languagePicker = getByTestId('language-selector')

    await act(async () => {
      await fireEvent(languagePicker, 'valueChange', 'en')
    })
    const en1 = queryAllByText('langcode: en')
    const it1 = queryAllByText('langcode: it')
    expect(en1).toHaveLength(1)
    expect(it1).toHaveLength(0)

    await act(async () => {
      await fireEvent(languagePicker, 'valueChange', 'it')
    })
    const en2 = queryAllByText('langcode: en')
    const it2 = queryAllByText('langcode: it')
    expect(en2).toHaveLength(0)
    expect(it2).toHaveLength(1)
  })
})
