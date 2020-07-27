import React from 'react'
import { useTranslation } from 'react-i18next'
import { supportedLocales } from 'services/i18n'
import PickerSheet from 'components/atoms/picker-sheet'

const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const languages = Object.entries(supportedLocales).map(
    ([langCode, langData]) => ({
      value: langCode,
      label: langData.name
    })
  )

  const currentLanguage = languages.find(({ value }) => value === i18n.language)
  const changeLanguage = lang => i18n.changeLanguage(lang)

  return (
    <PickerSheet
      currentOption={currentLanguage}
      onValueChange={changeLanguage}
      testID="language-selector"
      options={languages}
    />
  )
}

export default LanguageSelector
