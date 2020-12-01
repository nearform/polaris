import React, { useState, useEffect } from 'react'
// docs availible on https://github.com/react-native-maps/react-native-maps
import MapViewNative, { Callout, Marker } from 'react-native-maps'
import Container from 'components/atoms/container'
import styled from 'styled-components/native'

const startingRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
}

const Title = styled.Text`
  padding: 3px 3px;
  font-size: 16px;
  font-weight: bold;
`

const Description = styled.Text`
  text-align: left;
  color: #3f3f3f;
  padding: 0 3px;
  text-align: left;
  align-self: stretch;
  max-width: 200px;
`

const generateMarkers = (nr, region) => {
  const markersGen = []
  for (let i = 0; i < nr; i++) {
    markersGen.push({
      name: 'Lorem ipsum dolor sit amet',
      id: `${Date.now()}-${i}`,
      description: `
consectetur adipiscing elit. Duis ultrices lectus a lorem vulputate, 
semper urna ornare. Morbi aliquet felis non sem vehicula, vel rutrum
nisl tristique`,
      coords: {
        latitude:
          region.latitude + region.latitudeDelta * (Math.random() - 0.5),
        longitude:
          region.longitude + region.longitudeDelta * (Math.random() - 0.5)
      }
    })
  }
  return markersGen
}

export const MapView = () => {
  const [region, setRegion] = useState(startingRegion)
  const [markers, setMarkers] = useState([])
  useEffect(() => {
    const newMarkers = [...markers, ...generateMarkers(10, region)]
    if (newMarkers.length > 50) {
      newMarkers.splice(0, 10)
    }
    setMarkers(newMarkers)
  }, [region])

  return (
    <Container>
      <MapViewNative
        onRegionChangeComplete={r => setRegion(r)}
        style={{ width: '100%', height: '100%' }}
        initialRegion={startingRegion}
      >
        {markers.map(({ coords, name, description, id }) => {
          return (
            <Marker coordinate={coords} key={id}>
              <Callout>
                <Container>
                  <Title>{name}</Title>
                  <Description>{description}</Description>
                </Container>
              </Callout>
            </Marker>
          )
        })}
      </MapViewNative>
    </Container>
  )
}
