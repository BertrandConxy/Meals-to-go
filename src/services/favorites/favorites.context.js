import React, { createContext, useState, useEffect, useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AuthenticationContext } from '../authentication/authentication.context'

export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])
  const { user } = useContext(AuthenticationContext)

  const storeFavorites = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem(`@favorites-${uid}`, jsonValue)
    } catch (e) {
      // saving error
      throw new Error(e)
    }
  }

  const loadFavorites = async (uid) => {
    try {
      const value = await AsyncStorage.getItem(`@favorites-${uid}`)
      if (value !== null) {
        setFavorites(JSON.parse(value))
      }
    } catch (e) {
      // error reading value
      throw new Error(e)
    }
  }

  const add = (restaurant) => {
    setFavorites([...favorites, restaurant])
  }

  const remove = (restaurant) => {
    const newFavorites = favorites.filter(
      (x) => x.placeId !== restaurant.placeId,
    )
    setFavorites(newFavorites)
  }

  useEffect(() => {
    if (user && user.uid) {
      loadFavorites(user.uid)
    }
  }, [user])

  useEffect(() => {
    if (user && user.uid) {
      storeFavorites(favorites, user.uid)
    }
  }, [favorites, user])

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites: add,
        removeFromFavorites: remove,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}
