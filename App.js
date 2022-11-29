import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import Constants from 'expo-constants'
import { Provider as PaperProvider } from 'react-native-paper'
import RestaurantScreen from './src/features/restaurants/screens/restaurants.screen'
export default App = () => {
  return (
    <PaperProvider>
      <View style={styles.container}>
        <RestaurantScreen />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
    paddingHorizontal: 10,
  },
})
