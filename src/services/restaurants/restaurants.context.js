import React, { useState, useEffect, createContext, useMemo } from 'react'
import { restaurantsRequest, restaurantsTransform } from './restaurants.service'

export const RestaurantsContext = createContext()

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

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
