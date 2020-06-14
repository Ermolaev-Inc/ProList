import { createContext } from "react";

function noop(jwtToken: any, id: any):void {};

export const AuthContext = createContext({
  token: null,
  userId: null,
  login: noop,
  isAuth: false
})