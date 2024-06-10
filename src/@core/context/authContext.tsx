/* eslint-disable */

import React, { createContext, useContext, useState, ReactNode } from 'react'
import Cookies from 'universal-cookie'

interface AuthContextType {
  isAuthenticated: boolean

  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,

  login: () => {},
  logout: () => {}
})

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const cookies = new Cookies()
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!cookies.get('access_token')
  )

  const login = () => {
    // TODO: Implement login logic here
    setIsAuthenticated(true)
  }

  const logout = () => {
    // TODO: Implement login logic here
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)
