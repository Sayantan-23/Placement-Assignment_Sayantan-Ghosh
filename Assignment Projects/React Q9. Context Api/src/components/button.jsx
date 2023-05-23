import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";

const button = () => {

  const theme = useContext(ThemeContext);
    
  return (
    <button className={theme}>button</button>
  )
}

export default button