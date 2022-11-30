import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import { FlatList } from 'react-native'
import RestaurantInfo from '../components/restaurants-info.component'
import styled from 'styled-components/native'

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleChange = (query) => {
    setSearchQuery(query)
  }

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

  return (
    <RestaurantScreenView>
      <Searchbar
        placeholder="Search query"
        onChangeText={handleChange}
        elevation={2}
        value={searchQuery}
      />
      <RestaurantList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
        renderItem={() => <RestaurantInfo />}
        keyExtractor={(item) => item.name}
      />
    </RestaurantScreenView>
  )
}

export default RestaurantScreen
