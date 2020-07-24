import { createContext } from "react";

export enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

export const ThemeContext = createContext({
  theme: Theme.LIGHT,
  changeTheme: () => {},
}); 