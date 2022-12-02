import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../theme'
import { Text } from 'react-native-paper'
import RestaurantScreen from '../../features/restaurants/screens/restaurants.screen'
import { SafeArea } from '../../components/utils/safe-area.component'

const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
)

const Settings = () => (
  <SafeArea>
    <Text>Settings</Text>
  </SafeArea>
)

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
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={screenOptions}
        barStyle={{ backgroundColor: theme.colors.bg.secondary }}
        activeColor={theme.colors.ui.error}
        inactiveColor={theme.colors.ui.secondary}
        initialRouteName="Home"
      >
        <Tab.Screen name="Restaurants" component={RestaurantScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator
