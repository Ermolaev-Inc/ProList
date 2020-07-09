import { useCallback } from "react";

export const useHttp = () => {
  const request = useCallback(async (url = "/api/auth/register", method = "GET", body = null, headers = {}) => {
    body = JSON.stringify(body);
    headers["Content-Type"] = "application/json";
    const response = await fetch(url, {method, body, headers});
    console.log("Success");
    
    const data = await response.json();
    return data
  }, [])
  return request;
}