import React, { useState, useEffect, createContext } from 'react'
import { locationRequest } from './location.service'

export const LocationContext = createContext()

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('Toronto')
  const [location, setLocation] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const onSearch = (searchKeyword) => {
    setIsLoading(true)
    setKeyword(searchKeyword)
  }

  const retrieveLocation = (searchKeyword) => {
    locationRequest(searchKeyword.toLowerCase())
      .then((location) => {
        setIsLoading(false)
        setLocation(location)
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
  }

  useEffect(() => {
    if (!keyword.length) {
      return
    }
    retrieveLocation(keyword)
  }, [keyword])

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  )
}
