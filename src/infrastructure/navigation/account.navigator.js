import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Main"
        component={() => (
          <View>
            <Text>Account Screen</Text>
          </View>
        )}
      />
      <Stack.Screen
        name="Login"
        component={() => (
          <View>
            <Text>Login Screen</Text>
          </View>
        )}
      />
    </Stack.Navigator>
  )
}

export default AccountNavigator
