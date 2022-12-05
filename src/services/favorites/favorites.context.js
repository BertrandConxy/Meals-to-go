import React, { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export const FavoritesContext = createContext()

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  const storeFavorites = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@favorites', jsonValue)
    } catch (e) {
      // saving error
      console.log(e)
    }
  }

  const loadFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem('@favorites')
      if (value !== null) {
        setFavorites(JSON.parse(value))
      }
    } catch (e) {
      // error reading value
      console.log(e)
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
    loadFavorites()
  }, [])

  useEffect(() => {
    storeFavorites(favorites)
  }, [favorites])

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
