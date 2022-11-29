import { StatusBar } from 'expo-status-bar'
import Constants from 'expo-constants'
import { Provider as PaperProvider } from 'react-native-paper'
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen'
import styled from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import { ThemeProvider } from 'styled-components/native'

export default App = () => {
  const AppView = styled.View`
    flex: 1;
    background-color: white;
    marginTop: ${Constants.statusBarHeight}px;
    paddingHorizontal: 5px;
  `
  return (
    <ThemeProvider theme={theme}>
      <PaperProvider>
        <AppView>
          <RestaurantScreen />
          <StatusBar style="auto" />
        </AppView>
      </PaperProvider>
    </ThemeProvider>
  )
}
