import { useState } from "react";
import "./App.css";
import { ThemeContext } from "./context/themeContext";

function App() {
  const [theme, setTheme] = useState('dark');
  
  return (
    <ThemeContext.Provider value={theme}>
      <h1>Theme Switch Context Api</h1>
      <div className="card">
        <button>
          Change Theme
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
