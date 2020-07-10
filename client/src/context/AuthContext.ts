import { createContext } from "react";

function noop(jwtToken: string, id: string):void {};

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop,
  isAuth: false,
})