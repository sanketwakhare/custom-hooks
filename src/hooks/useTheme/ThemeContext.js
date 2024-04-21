import React, { useState } from "react";

const lightThemeStyles = {
  backgroundColor: "white",
  color: "#333",
};

const darkThemeStyles = {
  backgroundColor: "#333",
  color: "white",
};

const getThemeStyles = (theme) => {
  if (theme === "dark") {
    return darkThemeStyles;
  }
  return lightThemeStyles;
};

export const ThemeContext = React.createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => "light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={getThemeStyles(theme)}>{children}</div>
    </ThemeContext.Provider>
  );
};
