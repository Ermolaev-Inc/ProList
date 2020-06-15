import React, { useState, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import classes from "./styles/Auth.module.css";
import logo from "./img/logo.svg";
import { login, password } from "../../types";
import { AuthContext } from "../../context/AuthContext";

export const Auth = () => {
  const auth = useContext(AuthContext);
  const [login, setLogin]: [login, Function] = useState();
  const [password, setPassword]: [password, Function] = useState();
  const loginInputHandler = (event: any) => {
    setLogin(event.target.value);
  }
  const passwordInputHandler = (event: any) => {
    setPassword(event.target.value);
  }
  const request: Function = useHttp();
  const registerHandler = async () => {
    try {
      const data: Promise<Object> = await request("/api/auth/register", "POST", {login, password});  
    } catch (error) {
      console.log("Error:", error);
    }
  }
  const loginHandler = async () => {
    try {
      const data: any = await request("/api/auth/login", "POST", {login, password});
      auth.login(data.token, data.userId);
    } catch (error) {
      console.log("Error", error);
    }
  }
  return(
    <div className={classes.window}>
      <img src={logo} alt="Please wait" className={classes.logo}/>
      <input type="text" placeholder="Username" name="login" onChange={loginInputHandler} className={classes.login}/>
      <input type="password" placeholder="Password" name="password" onChange={passwordInputHandler} className={classes.password}/>
      <div className={classes.buttons}>
        <button className={classes.signup_btn} onClick={registerHandler}>Sign up</button>
        <button className={classes.login_btn} onClick={loginHandler}>Login</button>
      </div>
    </div>
  )
}
