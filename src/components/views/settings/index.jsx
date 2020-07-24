import * as React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import Container from 'components/atoms/container'
import SettingItem from 'components/molecules/setting-item'
import LanguageSelector from 'components/molecules/language-selector'

const Page = styled(Container)`
  justify-content: flex-start;
`

export const Settings = () => {
  const { t } = useTranslation()

  return (
    <Page>
      <SettingItem
        label={t('settings:languageLabel')}
        value={<LanguageSelector />}
      />
    </Page>
  )
}
