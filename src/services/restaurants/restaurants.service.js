import { mocks } from './mock'
import camelize from 'camelize'

const restaurantTransform = (results = []) => {
  const mappedResults = results.map((restaurant) => {
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
