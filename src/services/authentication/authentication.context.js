import React, { useState, createContext } from 'react'
import { login } from './authentication.service'

export const AuthenticationContext = createContext()

export const AuthenticationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const onLogin = async (email, password) => {
    setIsLoading(true)
    try {
      const user = await login(email, password)
      setUser(user)
      setIsLoading(false)
      setIsAuthenticated(true)
    } catch (error) {
      setIsLoading(false)
      if (error.code === 'auth/user-not-found') {
        setError('User not found')
      } else if (error.code === 'auth/wrong-password') {
        setError('Wrong password')
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email')
      } else {
        setError('Something went wrong')
      }
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        user,
        isLoading,
        error,
        onLogin,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
