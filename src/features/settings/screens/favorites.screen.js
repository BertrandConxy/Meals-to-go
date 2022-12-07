import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { FavoritesContext } from '../../../services/favorites/favorites.context'
import RestaurantInfo from '../../restaurants/components/restaurants-info.component'
import { Text } from '../../../components/typography/text.component'
import {
  FavoritesWrapper,
  NoFavoritesArea,
  FavoritesList,
} from '../components/favorites.styles'

const FavoritesScreen = ({ navigation }) => {
  const { favorites } = useContext(FavoritesContext)
  return (
    <FavoritesWrapper>
      {favorites.length ? (
        <FavoritesList
          data={favorites}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('RestaurantDetail', {
                    restaurant: item,
                  })
                }
              >
                <RestaurantInfo restaurant={item} />
              </TouchableOpacity>
            )
          }}
          keyExtractor={(item) => item.name}
        />
      ) : (
        <NoFavoritesArea>
          <Text variant="title">No favorites added yet</Text>
        </NoFavoritesArea>
      )}
    </FavoritesWrapper>
  )
}

export default FavoritesScreen
