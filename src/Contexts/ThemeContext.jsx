import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext()

export const useTheme = () => {
  return useContext(ThemeContext)
}

function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const toggleTheme = () => {
    const newerTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newerTheme)
    localStorage.setItem('theme', newerTheme)
  }
  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
