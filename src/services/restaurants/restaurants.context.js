import React, { useState, useEffect, createContext, useContext } from 'react'
import { restaurantsRequest } from './restaurants.service'
import { LocationContext } from '../location/location.context'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
  const { location } = useContext(LocationContext)
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const retrieveRestaurants = (loc) => {
    setIsLoading(true)
    setRestaurants([])
    restaurantsRequest(loc)
      .then((restaurants) => {
        setIsLoading(false)
        setRestaurants(restaurants)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`
      retrieveRestaurants(locationString)
    }
  }, [location])

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  )
}
