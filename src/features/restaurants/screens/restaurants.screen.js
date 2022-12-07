import React, { useContext, useState } from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'
import { FlatList, TouchableOpacity } from 'react-native'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import { FavoritesContext } from '../../../services/favorites/favorites.context'
import RestaurantInfo from '../components/restaurants-info.component'
import SearchComponent from '../components/search.component'
import FavoriteIcon from '../../../components/favorites/favorite.component'
import { SafeArea } from '../../../components/utils/safe-area.component'
import FavoritesBar from '../../../components/favorites/favorites-bar.component'
import FadeInView from '../../../components/animations/fade.animation'
import styled from 'styled-components/native'

const RestaurantScreenView = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`
const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
  },
})``

const IndicatorContainer = styled.View`
  flex: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 999;
`
const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext)
  const { favorites } = useContext(FavoritesContext)
  const [isToggled, setIsToggled] = useState(false)

  const handleToggle = () => {
    setIsToggled(!isToggled)
  }

  return (
    <SafeArea>
      {isLoading && (
        <IndicatorContainer>
          <ActivityIndicator
            animating={true}
            color={MD2Colors.blue500}
            size={50}
          />
        </IndicatorContainer>
      )}
      <RestaurantScreenView>
        <SearchComponent isToggled={isToggled} handleToggle={handleToggle} />
        {isToggled && (
          <FavoritesBar
            favorites={favorites}
            onNavigate={navigation.navigate}
          />
        )}
        <FadeInView>
          <RestaurantList
            data={restaurants}
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
                  <FavoriteIcon restaurant={item} />
                </TouchableOpacity>
              )
            }}
            keyExtractor={(item) => item.name}
          />
        </FadeInView>
      </RestaurantScreenView>
    </SafeArea>
  )
}

export default RestaurantScreen
