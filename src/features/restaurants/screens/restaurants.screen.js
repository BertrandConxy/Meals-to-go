import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import RestaurantInfo from '../components/restaurants-info.component'
import styled from 'styled-components/native'

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleChange = (query) => {
    setSearchQuery(query)
  }

  const RestaurantScreenView = styled.View`
    flex: 1;
    background-color: white;
  `;

  return (
    <RestaurantScreenView>
      <Searchbar
        placeholder="Search query"
        onChangeText={handleChange}
        elevation={2}
        value={searchQuery}
      />
      <RestaurantInfo />
    </RestaurantScreenView>
  )
}

export default RestaurantScreen
