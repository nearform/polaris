import React from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components/native'
import Link from 'components/atoms/link'

const Container = styled.View`
  flex-direction: row;
  background-color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  shadow-offset: 0 2px;
  shadow-radius: 2px;
  shadow-opacity: 1;
`

const Item = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 30px;
`

const Nav = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Item>
        <Link title={t('home:title')} path={'/'} />
      </Item>
      <Item>
        <Link title={t('listView:title')} path={'/listView'} />
      </Item>
      <Item>
        <Link title={t('settings:title')} path={'/settings'} />
      </Item>
    </Container>
  )
}

export default Nav
