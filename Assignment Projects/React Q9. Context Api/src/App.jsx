import "./App.css";
import { createContext, useEffect, useState } from "react";
import Button from "./components/button";
import Header from "./components/Header";

export const ThemeContext = createContext();

function App() {
  const [darkMode, SetDarkMode] = useState(false);

  const toggleDark = () => {
    SetDarkMode(!darkMode);
  };

  useEffect(() => {
    const theme = darkMode ? "dark" : "light";
    const body = document.querySelector("body");
    body.classList.remove("dark", "light");
    body.classList.toggle(theme);
    body.style.cssText = "transition: background .5s ease";
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDark }}>
      <Header />
      <div className="card">
        <Button />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
