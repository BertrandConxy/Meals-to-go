import React, { useState, useContext } from 'react'
import { Searchbar } from 'react-native-paper'
import { FlatList } from 'react-native'
import RestaurantInfo from '../components/restaurants-info.component'
import { RestaurantsContext } from '../../../services/restaurants/restaurants.context'
import styled from 'styled-components/native'
import { SafeArea } from '../../../components/utils/safe-area.component'

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleChange = (query) => {
    setSearchQuery(query)
  }

  const { isLoading, restaurants, error } = useContext(RestaurantsContext)

  const RestaurantScreenView = styled.View`
    background-color: ${(props) => props.theme.colors.bg.primary};
    padding: ${(props) => props.theme.space[3]};
  `
  const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 8,
    },
  })``

  return (
    <SafeArea>
      <RestaurantScreenView>
        <Searchbar
          placeholder="Search query"
          onChangeText={handleChange}
          elevation={2}
          value={searchQuery}
        />
        <RestaurantList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfo restaurant={item} />}
          keyExtractor={(item) => item.name}
        />
      </RestaurantScreenView>
    </SafeArea>
  )
}

export default RestaurantScreen
