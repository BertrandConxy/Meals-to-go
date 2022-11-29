import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import RestaurantInfo from '../components/restaurants-info.component'

const RestaurantScreen = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleChange = (query) => {
    setSearchQuery(query)
  }
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search query"
        onChangeText={handleChange}
        elevation={2}
        value={searchQuery}
      />
      <RestaurantInfo />
    </View>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
