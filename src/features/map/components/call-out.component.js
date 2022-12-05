import { View, Text } from 'react-native'
import React from 'react'

const MapCallOut = ({ restaurant }) => {
  return (
    <View>
      <Text>{restaurant.address}</Text>
    </View>
  )
}

export default MapCallOut
