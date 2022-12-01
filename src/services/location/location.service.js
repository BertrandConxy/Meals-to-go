import camelize from 'camelize'
import { locations } from './location.mock'

const locationTransform = (result) => {
  const formattedResponse = camelize(result)
  const { geometry = {} } = formattedResponse.results[0]
  const { lat, lng } = geometry.location
  return { lat, lng }
}

export const locationRequest = async (searchTerm) => {
  const location = await locations[searchTerm]
  return locationTransform(location)
}
