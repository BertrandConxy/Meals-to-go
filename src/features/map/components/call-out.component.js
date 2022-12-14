import React from 'react'
import CompactRestaurantInfo from '../../../components/restaurant/compact-restaurant-info.component'

const MapCallOut = ({ restaurant }) => {
  return <CompactRestaurantInfo restaurant={restaurant} isMap />
}

export default MapCallOut
