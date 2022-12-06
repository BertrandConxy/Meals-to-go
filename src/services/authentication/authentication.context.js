import React, { useState, CreateContext } from 'react'
import { login } from './authentication.service'

export const AuthenticationContext = CreateContext()

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
      setIsAuthenticated(true)
      setIsLoading(false)
    } catch (error) {
      setError(error)
      setIsLoading(false)
    }
  }

  return (
    <AuthenticationContext.Provider
      value={{ user, onLogin, isAuthenticated, isLoading, error }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
