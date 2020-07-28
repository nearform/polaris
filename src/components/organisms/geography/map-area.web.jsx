import * as React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import toBBox from 'geojson-bounding-box'

import mapStyle from './map-style'
import propTypes from './prop-types'

const MapArea = ({ item, constituents, onSelectConstituent, ...rest }) => {
  const [minLong, minLat, maxLong, maxLat] = toBBox(item)
  const lat = (minLat + maxLat) / 2
  const lng = (minLong + maxLong) / 2
  const features = constituents ? constituents.features : [item]
  const containerStyle = {
    width: '100%',
    height: '100%'
  }

  const onLoad = map => {
    const bounds = {
      west: minLong,
      east: maxLong,
      north: maxLat,
      south: minLat
    }

    map.fitBounds(bounds, {
      top: 20,
      left: 20,
      right: 20,
      bottom: 20
    })

    map.data.setStyle(mapStyle)

    map.data.addGeoJson({ type: 'FeatureCollection', features })
    onSelectConstituent &&
      map.data.addListener('click', e =>
        onSelectConstituent(e.feature.getProperty('name'))
      )
  }

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY}>
      <GoogleMap
        center={{ lat, lng }}
        onLoad={onLoad}
        mapContainerStyle={containerStyle}
      />
    </LoadScript>
  )
}

MapArea.propTypes = propTypes

export default MapArea
