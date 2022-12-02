import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RestaurantScreen from '../../features/restaurants/screens/restaurants.screen'
import { View, Text } from 'react-native'

const RestaurantStack = createNativeStackNavigator()

const RestaurantDetail = () => {
  return (
    <View>
      <Text>Restaurant Detail</Text>
    </View>
  )
}

const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen
        name="RestaurantList"
        component={RestaurantScreen}
      />

      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetail}
      />
    </RestaurantStack.Navigator>
  )
}

export default RestaurantsNavigator
