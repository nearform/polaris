import * as React from 'react'
import GeographicArea from 'components/templates/geography/geographic-area'
import usePlatformNavigation from 'utils/hooks/usePlatformNavigation'

import spain from './data/country'
import communities from './data/communities'

export const Spain = () => {
  const { navigate } = usePlatformNavigation()
  return (
    <GeographicArea
      item={spain}
      constituents={communities}
      flags
      onSelectConstituent={name => navigate('/community/:name', { name })}
    />
  )
}
