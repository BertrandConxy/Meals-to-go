import React from 'react'
import {
  createNativeStackNavigator,
  cardStyleInterpolator,
} from '@react-navigation/native-stack'
import SettingsScreen from '../../features/settings/screens/settings.screen'
import FavoritesScreen from '../../features/settings/screens/favorites.screen'

const SettingStack = createNativeStackNavigator()

const SettingsNavigator = () => {
  return (
    <SettingStack.Navigator
      screenOptions={{
        headerShown: 'screen',
        cardStyleInterpolator: cardStyleInterpolator,
      }}
    >
      <SettingStack.Screen name="Settings" component={SettingsScreen} />

      <SettingStack.Screen name="Favorites" component={FavoritesScreen} />
    </SettingStack.Navigator>
  )
}

export default SettingsNavigator
