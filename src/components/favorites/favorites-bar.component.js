import { ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info.component'

const FavoritesWrapper = styled.View`
  padding: 10px;
`
const BarView = styled.View`
  margin-right: 10px;
`

const FavoritesBar = ({ favorites, onNavigate }) => {
  return (
    <FavoritesWrapper>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <BarView key={restaurant.name}>
              <TouchableOpacity
                onPress={() => onNavigate('RestaurantDetail', { restaurant })}
              >
                <CompactRestaurantInfo
                  key={`card-${restaurant.name}`}
                  restaurant={restaurant}
                />
              </TouchableOpacity>
            </BarView>
          )
        })}
      </ScrollView>
    </FavoritesWrapper>
  )
}

export default FavoritesBar
