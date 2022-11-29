import { StyleSheet, View } from 'react-native'
import { Card, Title, Paragraph } from 'react-native-paper'
import React from 'react'

const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon,
    photos = [
      'https://images.unsplash.com/photo-1604634077373-a279cadc62c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant

  return (
    <View style={styles.listContainer}>
      <Card elevation={5} >
        <Card.Cover source={{ uri: photos[0] }} />
        <Card.Content>
          <Title>{name}</Title>
          <Paragraph>Card content</Paragraph>
        </Card.Content>
      </Card>
    </View>
  )
}

export default RestaurantInfo

const styles = StyleSheet.create({
  listContainer: {
    padding: 5,
    flex: 1,
    flexGrow: 1,
    marginTop: 10,
  },
})
