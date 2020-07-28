import * as React from 'react'
import T from 'prop-types'
import styled from 'styled-components/native'
import { Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Label = styled.Text`
  font-weight: bold;
`

const Container = styled.View`
  padding: 10px;
  flex-shrink: 1;
`

const Infographic = ({ label, value, icon }) => (
  <Container>
    <AntDesign name={icon} size={28} />
    <Label>{label}</Label>
    <Text>{value ?? '–'}</Text>
  </Container>
)

Infographic.propTypes = {
  label: T.string.isRequired,
  value: T.string,
  icon: T.string
}

export default Infographic
