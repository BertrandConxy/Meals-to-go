import React, { useContext } from 'react'
import { FavoritesContext } from '../../services/favorites/favorites.context'
import { Ionicons } from '@expo/vector-icons'
import styled from 'styled-components'

const Favorite = styled.View`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 9;
`

const FavoriteIcon = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } = useContext(
    FavoritesContext,
  )
  const isFavorite = favorites.find((r) => r.placeId === restaurant.placeId)
  return (
    <Favorite>
      <Ionicons
        name={isFavorite ? 'heart' : 'heart-outline'}
        size={24}
        color={isFavorite ? 'red' : 'white'}
        onPress={() =>
          !isFavorite
            ? addToFavorites(restaurant)
            : removeFromFavorites(restaurant)
        }
      />
    </Favorite>
  )
}

export default FavoriteIcon
