import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import { LocationContext } from '../../../services/location/location.context'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import MapView, { Marker } from 'react-native-maps'
import SearchComponent from '../components/search.component'
import styled from 'styled-components/native'

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`

const MapScreen = () => {
  const { location } = useContext(LocationContext)
  const { restaurants = [] } = useContext(RestaurantsContext)
  const [latDelta, setLatDelta] = useState(0)
  const { viewport, lat, lng } = location

  useEffect(() => {
    const northeastLat = viewport.northeast.lat
    const southwestLat = viewport.southwest.lat
    setLatDelta(northeastLat - southwestLat)
  }, [location, viewport])

  return (
    <View>
      <SearchComponent />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <>
              <Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              />
            </>
          )
        })}
      </Map>
    </View>
  )
}

export default MapScreen
