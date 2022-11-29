import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen'
import styled from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import { ThemeProvider } from 'styled-components/native'
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

  const AppView = styled.View`
    flex: 1;
    margin-top: ${Constants.statusBarHeight}px;
  `
  return (
    <ThemeProvider theme={theme}>
      <AppView>
        <RestaurantScreen />
        <StatusBar style="auto" />
      </AppView>
    </ThemeProvider>
  )
}
