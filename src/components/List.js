import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = () => {
  return (
    <View style={styles.listContainer} >
      <Text>Lists</Text>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
    listContainer: {
        backgroundColor: 'green',
        padding: 10,
        flex: 1,
        flexGrow: 1,
    }
})