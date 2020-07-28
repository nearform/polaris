import * as React from 'react'
import { Platform } from 'react-native'
import Container from 'components/atoms/container'
import { MapArea, AreaDetail } from 'components/organisms/geography'
import styled from 'styled-components/native'
import styledWeb from 'styled-components'

const SplitContainer =
  Platform.OS === 'web'
    ? styledWeb.div`
        display: flex;
        flex: 1;
        flex-direction: column;
        height: 100%;
        ${props =>
          props.theme.breakpoints.greaterThan(
            'sm'
          )`flex-direction: row-reverse;`}
      `
    : Container

const SplitView = styled.View`
  align-self: stretch;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 50%;
`

const GeographicArea = props => (
  <SplitContainer>
    <SplitView>
      <MapArea {...props} />
    </SplitView>
    <SplitView>
      <AreaDetail {...props} />
    </SplitView>
  </SplitContainer>
)

export default GeographicArea
