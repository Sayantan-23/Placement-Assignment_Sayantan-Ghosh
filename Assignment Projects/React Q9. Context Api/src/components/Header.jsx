import { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {

  const { darkMode } = useContext(ThemeContext);
  
  const theme = darkMode ? "dark" : "light"

  return (
    <h1 className={theme}>Theme Switch Context Api</h1>
  )
}

export default Header