import React, { useContext, useState } from "react";

const ThemeContext = React.createContext();

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return [theme, toggleTheme];
};

const lightThemeStyles = {
  backgroundColor: "white",
  color: "black",
};

const darkThemeStyles = {
  backgroundColor: "gray",
  color: "white",
};

const getThemeStyles = (theme) => {
  if (theme === "dark") {
    return darkThemeStyles;
  }
  return lightThemeStyles;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => "light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div style={getThemeStyles(theme)}>{children}</div>
    </ThemeContext.Provider>
  );
};
