import React, { createContext, useState, useContext } from "react";
import { Appearance } from "react-native";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const colorScheme = Appearance.getColorScheme(); // light or dark
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const theme = {
    isDarkMode,
    setIsDarkMode,
    colors: isDarkMode
      ? {
          background: "#000000",
          text: "#FFFFFF",
          primary: "#6200EE",
          secondary: "#03DAC6",
        }
      : {
          background: "#FFFFFF",
          text: "#000000",
          primary: "#6200EE",
          secondary: "#03DAC6",
        },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
