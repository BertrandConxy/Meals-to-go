import React, { useContext } from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'
import { FlatList, TouchableOpacity } from 'react-native'
import RestaurantInfo from '../components/restaurants-info.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import SearchComponent from '../components/search.component'
import styled from 'styled-components/native'
import { SafeArea } from '../../../components/utils/safe-area.component'

const RestaurantScreen = ({ navigation }) => {
  const { isLoading, restaurants } = useContext(RestaurantsContext)

  const RestaurantScreenView = styled.View`
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
    align-items: center;
    justify-content: center;
  `

  if (isLoading) {
    return (
      <SafeArea>
        <IndicatorContainer>
          <ActivityIndicator animating={true} color={MD2Colors.blue500} />
        </IndicatorContainer>
      </SafeArea>
    )
  }

  return (
    <SafeArea>
      <RestaurantScreenView>
        <SearchComponent />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('RestaurantDetail')}
              style={{ marginBottom: 16 }}
            >
              <RestaurantInfo restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      </RestaurantScreenView>
    </SafeArea>
  )
}

export default RestaurantScreen
