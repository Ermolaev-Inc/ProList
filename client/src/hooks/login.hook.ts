import { useCallback, useState, useEffect } from "react";
import { token, userId } from "../types";

export const useLogin = () => {
  const [token, setToken]: [token, Function] = useState(null);
  const [userId, setUserId]: [userId, Function] = useState(null);
  const login = useCallback((jwtToken: string, id: string) => {
    setToken(jwtToken);
    setUserId(id);
    localStorage.setItem("userData", JSON.stringify({
      userId: id, token: jwtToken
    }))
  }, [])
  useEffect(() => {
    const currentUserData = localStorage.getItem("userData");
    if (currentUserData != null) {
      const data = JSON.parse(currentUserData);
      if (data && data.token) {
        login(data.token, data.userId);
      }
    } 
  }, [login])
  return { login, token, userId }
}