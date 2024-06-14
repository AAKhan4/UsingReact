import ThemeContext from "./ThemeContext";
import React, { useState } from "react";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("l");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "l" ? "d" : "l"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
