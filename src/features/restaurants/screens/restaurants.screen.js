import React, { useContext } from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'
import { FlatList, TouchableOpacity } from 'react-native'
import RestaurantInfo from '../components/restaurants-info.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import SearchComponent from '../components/search.component'
import FavoriteIcon from '../../../components/favorites/favorite.component'
import styled from 'styled-components/native'
import { SafeArea } from '../../../components/utils/safe-area.component'

const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext)

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

  return (
    <SafeArea>
      <RestaurantScreenView>
        <SearchComponent />
        {isLoading && (
          <IndicatorContainer>
            <ActivityIndicator
              animating={true}
              color={MD2Colors.blue500}
              size={50}
            />
          </IndicatorContainer>
        )}
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
      </RestaurantScreenView>
    </SafeArea>
  )
}

export default RestaurantScreen
