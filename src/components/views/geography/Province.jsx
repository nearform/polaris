import * as React from 'react'
import GeographicArea from 'components/templates/geography/geographic-area'
import usePlatformParams from 'utils/hooks/usePlatformParams'

import provinces from './data/provinces'

export const Province = () => {
  const { name } = usePlatformParams()
  const item = provinces.features.find(f => f.properties.name === name)

  return <GeographicArea item={item} />
}
