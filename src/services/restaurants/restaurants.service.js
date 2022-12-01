import { mocks } from './mock'
import camelize from 'camelize'

const restaurantTransform = (results = []) => {
  const mappedResults = results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=200&photoreference=${
        p.photo_reference
      }&key=${'AIzaSyCJ2Q9S0nX9dJpZ4Y1YJY4Z4b4g4w0nHJU'}`
    })
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
    }
  })
  return camelize(mappedResults)
}

export const restaurantsRequest = async (location = '43.653225,-79.383186') => {
  try {
    const mock = await mocks[location]
    const camelizeMock = await restaurantTransform(mock)
    return camelizeMock
  } catch (error) {
    console.log(error)
  }
}
