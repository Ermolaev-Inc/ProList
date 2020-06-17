import React from "react";
import { useHttp } from "../../hooks/http.hook";
import { json } from "express";

export const AppContainer = () => {
  const request: Function = useHttp();
  let localStorageUserData = localStorage.getItem("userData");
  const handler = async () => {
    try {
      if (localStorageUserData == null) {
        return console.error("You are not auth");
      }
      const userData = JSON.parse(localStorageUserData);
      const data = await request("/api/personal/create", "POST", {userData});
    } catch (error) {
      console.log("Error", error);
    }
  }
  return(
    <div>
      <button onClick={handler}>Click me</button>
    </div>
  )
}