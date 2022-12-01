import { StatusBar } from 'expo-status-bar'
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen'
import { SafeArea } from './src/components/utils/safe-area.component'
import { Text } from 'react-native-paper'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from './src/infrastructure/theme'
import { ThemeProvider } from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

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
      <RestaurantsContextProvider>
        <NavigationContainer>
          <AppView>
            <Tab.Navigator
              barStyle={{ backgroundColor: theme.colors.bg.secondary }}
              initialRouteName="Home"
              activeColor={theme.colors.ui.error}
              inactiveColor={theme.colors.ui.secondary}
              screenOptions={screenOptions}
            >
              <Tab.Screen name="Restaurants" component={RestaurantScreen} />
              <Tab.Screen name="Map" component={Map} />
              <Tab.Screen name="Settings" component={Settings} />
            </Tab.Navigator>
            <StatusBar style="auto" />
          </AppView>
        </NavigationContainer>
      </RestaurantsContextProvider>
    </ThemeProvider>
  )
}
