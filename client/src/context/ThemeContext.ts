import { createContext } from "react";

export enum Theme {
  LIGHT = "LIGHT",
  DARK = "DARK",
}

function changeTheme(): void {

}

export const ThemeContext = createContext({
  theme: Theme.LIGHT,
  changeTheme: changeTheme,
}); 