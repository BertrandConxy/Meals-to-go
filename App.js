import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import Search from './src/components/Search';
import List from './src/components/List';

export default App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Search />
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
