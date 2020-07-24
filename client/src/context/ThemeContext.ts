import React from "react";

enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export const ThemeContext = React.createContext(Theme.LIGHT); 