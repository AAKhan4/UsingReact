import React from "react";
import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

export default function ContentComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      Current theme: {theme === "l" ? "light" : "dark"}
      <button onClick={toggleTheme()}>Toggle Theme</button>
    </div>
  );
}
