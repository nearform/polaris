import * as React from 'react'
import MapView, { Geojson } from 'react-native-maps'
import toBBox from 'geojson-bounding-box'

import mapStyle from './map-style'
import propTypes from './prop-types'

const cameraPadding = 1.2
const makeGeoJsonFeatureCollection = feature => ({
  type: 'FeatureCollection',
  features: [feature]
})

const MapArea = ({ item, constituents, onSelectConstituent, ...rest }) => {
  const [minLong, minLat, maxLong, maxLat] = toBBox(item)
  const features = constituents ? constituents.features : [item]
  return (
    <MapView
      key={item.properties.name}
      mapType="mutedStandard" // ios muted map
      width="100%"
      height="100%"
      initialRegion={{
        latitude: (minLat + maxLat) / 2,
        longitude: (minLong + maxLong) / 2,
        latitudeDelta: (maxLat - minLat) * cameraPadding,
        longitudeDelta: (maxLong - minLong) * cameraPadding
      }}
      {...rest}
    >
      {features.map(feature => (
        // see https://github.com/react-native-community/react-native-maps/pull/3499
        <Geojson
          key={feature.properties.name}
          geojson={makeGeoJsonFeatureCollection(feature)}
          tappable
          onPress={() => console.log('this does not work currently')}
          {...mapStyle}
        />
      ))}
    </MapView>
  )
}

MapArea.propTypes = propTypes

export default MapArea
