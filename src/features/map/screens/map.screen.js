import React, { useContext, useEffect, useState } from 'react'
import { View } from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { LocationContext } from '../../../services/location/location.context'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import SearchComponent from '../components/search.component'
import MapCallOut from '../components/call-out.component'
import styled from 'styled-components/native'

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`

const MapScreen = ({ navigation }) => {
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
      >
        {restaurants.map((restaurant, index) => {
          return (
            <Marker
              key={`marker-${restaurant.placeId}-${index}`}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant: restaurant,
                  })
                }
              >
                <MapCallOut restaurant={restaurant} />
              </Callout>
            </Marker>
          )
        })}
      </Map>
    </View>
  )
}

export default MapScreen
