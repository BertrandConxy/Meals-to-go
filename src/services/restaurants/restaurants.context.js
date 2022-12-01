import React, { useState, useEffect, createContext, useMemo } from 'react'
import { restaurantsRequest } from './restaurants.service'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    retrieveRestaurants()
  }, [])

  const retrieveRestaurants = () => {
    setIsLoading(true)
    setRestaurants([])
    setTimeout(() => {
      restaurantsRequest()
        .then((results) => {
          setIsLoading(false)
          setRestaurants(results)
        })
        .catch((err) => {
          setIsLoading(false)
          setError(err)
        })
    }, 2000)
  }

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
