import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthenticationContext } from '../../services/authentication/authentication.context'
import AppNavigator from './app.navigator'

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext)
  return isAuthenticated ? (
    <AppNavigator />
  ) : (
    <View>
      <Text>Not Authenticated</Text>
    </View>
  )
}

export default Navigation
