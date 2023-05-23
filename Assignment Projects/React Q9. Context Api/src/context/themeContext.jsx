import { createContext, useState } from "react";

export const ThemeContext = createContext()

export const darkModeProvider = ({children}) => {
  const [darkMode, setDarkMode] = useState(false);

  <ThemeContext.Provider value={ [darkMode, setDarkMode]}>
  {children}
  </ThemeContext.Provider >
}