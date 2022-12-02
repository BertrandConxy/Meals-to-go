import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import RestaurantScreen from '../../features/restaurants/screens/restaurants.screen'
import RestaurantDetail from '../../features/restaurants/screens/restaurant-detail.screen'

const RestaurantStack = createNativeStackNavigator()

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
