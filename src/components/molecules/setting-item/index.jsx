import T from 'prop-types'
import * as React from 'react'
import { Text, Platform } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
  width: 100%;
  padding: ${props => props.theme.spacing(1)};
  flex-direction: row;
  justify-content: ${Platform.OS === 'web' ? 'center' : 'space-between'};
  align-items: center;
`

const Label = styled.View`
  margin-right: ${props => props.theme.spacing(1)};
`

const SettingItem = ({ label, value }) => (
  <Container>
    <Label>
      <Text>{label}</Text>
    </Label>
    {value}
  </Container>
)

SettingItem.propTypes = {
  label: T.string,
  value: T.node
}

export default SettingItem
