import React, { useContext } from 'react'
import { Text, Button } from 'react-native-paper'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../theme'
import RestaurantsNavigator from './restaurants.navigator'
import { SafeArea } from '../../components/utils/safe-area.component'
import MapScreen from '../../features/map/screens/map.screen'
import { RestaurantsContextProvider } from '../../services/restaurants/restaurants.context'
import { LocationContextProvider } from '../../services/location/location.context'
import { FavoritesContextProvider } from '../../services/favorites/favorites.context'
import { AuthenticationContext } from '../../services/authentication/authentication.context'

const Settings = () => {
  const { onLogout } = useContext(AuthenticationContext)
  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button onPress={() => onLogout()}>Logout</Button>
    </SafeArea>
  )
}

const ICON_NAME = {
  Restaurants: 'md-restaurant',
  Map: 'md-map',
  Settings: 'md-settings',
}

const screenOptions = ({ route }) => {
  const iconName = ICON_NAME[route.name]
  return {
    tabBarIcon: ({ color }) => (
      <Ionicons name={iconName} size={20} color={color} />
    ),
  }
}

const AppNavigator = () => {
  const Tab = createMaterialBottomTabNavigator()
  return (
    <FavoritesContextProvider>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <Tab.Navigator
            screenOptions={screenOptions}
            barStyle={{ backgroundColor: theme.colors.bg.secondary }}
            activeColor={theme.colors.ui.error}
            inactiveColor={theme.colors.ui.secondary}
            initialRouteName="Home"
          >
            <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </FavoritesContextProvider>
  )
}

export default AppNavigator
