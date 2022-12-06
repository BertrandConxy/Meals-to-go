import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Navigation from './src/infrastructure/navigation'
import styled from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import { ThemeProvider } from 'styled-components/native'
import { RestaurantsContextProvider } from './src/services/restaurants/restaurants.context'
import { LocationContextProvider } from './src/services/location/location.context'
import { FavoritesContextProvider } from './src/services/favorites/favorites.context'
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context'
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
  `

  return (
    <ThemeProvider theme={theme}>
      <AuthenticationContextProvider>
        <FavoritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppView>
                <Navigation />
                <StatusBar style="auto" />
              </AppView>
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavoritesContextProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  )
}
