import React from 'react'
import RestaurantInfo from '../components/restaurants-info.component'
import { SafeArea } from '../../../components/utils/safe-area.component'

const RestaurantDetail = ({ route }) => {
  const { restaurant } = route.params
  return (
    <SafeArea>
      <RestaurantInfo restaurant={restaurant} />
    </SafeArea>
  )
}

export default RestaurantDetail
