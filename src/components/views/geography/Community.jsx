import * as React from 'react'
import GeographicArea from 'components/templates/geography/geographic-area'
import usePlatformNavigation from 'utils/hooks/usePlatformNavigation'
import usePlatformParams from 'utils/hooks/usePlatformParams'

import communities from './data/communities'
import provinces from './data/provinces'

export const Community = () => {
  const { name } = usePlatformParams()
  const { navigate } = usePlatformNavigation()

  const item = communities.features.find(f => f.properties.name === name)
  const constituents = {
    ...provinces,
    features: provinces.features.filter(p => p.properties.community === name)
  }
  return (
    <GeographicArea
      item={item}
      constituents={constituents}
      onSelectConstituent={name => navigate('/province/:name', { name })}
    />
  )
}
