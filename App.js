import { StatusBar } from 'expo-status-bar'
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen'
import styled from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

export default App = () => {
  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!OswaldLoaded || !LatoLoaded) {
    return null
  }

  const Tab = createMaterialBottomTabNavigator()

  const AppView = styled.View`
    flex: 1;
  `
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppView>
          <Tab.Navigator>
            <Tab.Screen name="Restaurants" component={RestaurantScreen} />
          </Tab.Navigator>
          <StatusBar style="auto" />
        </AppView>
      </NavigationContainer>
    </ThemeProvider>
  )
}
