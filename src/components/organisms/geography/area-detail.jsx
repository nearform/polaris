import * as React from 'react'
import { ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { ListItem } from 'react-native-elements'
import Infographic from 'components/molecules/infographic'
import Title from 'components/atoms/title'

import propTypes from './prop-types'

const InfographicContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 40px;
  margin-top: 20px;
`

const Details = styled.View`
  margin-left: 20px;
  margin-right: 20px;
`

const AreaDetail = ({ item, constituents, onSelectConstituent, ...rest }) => {
  return (
    <ScrollView>
      <Details>
        <Title>{item.properties.name}</Title>
        <InfographicContainer>
          <Infographic
            icon="team"
            label="Population"
            value={item.properties.population}
          />
          <Infographic
            icon="enviromento"
            label="Area"
            value={item.properties.area && `${item.properties.area} km\u00b2`}
          />
          <Infographic
            icon="home"
            label="Capital"
            value={item.properties.capital}
          />
        </InfographicContainer>
      </Details>

      {constituents &&
        constituents.features.map((c, i) => (
          <ListItem
            key={c.properties.name}
            leftAvatar={
              c.properties.flag && {
                size: 'small',
                title: `flag of ${c.properties.name}`,
                source: c.properties.flag
              }
            }
            onPress={() => onSelectConstituent(c.properties.name)}
            title={c.properties.name}
            chevron
            bottomDivider
            topDivider={i === 0}
          />
        ))}
    </ScrollView>
  )
}

AreaDetail.propTypes = propTypes

export default AreaDetail
