import { useCallback, useState, useEffect } from "react";
import { userInfo } from "os";
import { json } from "express";

export const useLogin = () => {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken);
    setUserId(id);
  }, [])
  localStorage.setItem("userData", JSON.stringify({
    userId, token
  }))
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if (data && data.token) {
      login(data.token, data.userId);
    }
  }, [login])
  return { login, token, userId }
}