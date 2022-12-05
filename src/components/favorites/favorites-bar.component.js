import { ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import styled from 'styled-components'
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info.component'
import { Text } from '../typography/text.component'

const FavoritesWrapper = styled.View`
  padding: 10px;
`
const BarView = styled.View`
  margin-right: 10px;
`

const FavoritesBar = ({ favorites, onNavigate }) => {
  return (
    <FavoritesWrapper>
      {!favorites.length && <Text variant="error">No favorites available</Text>}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          const key = restaurant.name.split(' ').join('')
          return (
            <BarView key={key}>
              <TouchableOpacity
                onPress={() => onNavigate('RestaurantDetail', { restaurant })}
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </BarView>
          )
        })}
      </ScrollView>
    </FavoritesWrapper>
  )
}

export default FavoritesBar
