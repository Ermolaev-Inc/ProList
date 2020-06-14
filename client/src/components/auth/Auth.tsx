import React, { useState } from "react";
import { useRegister } from "../../hooks/register.hook";
import classes from "./styles/Auth.module.css";
import logo from "./img/logo.svg";
import { login, password } from "../../types";

export const Auth = () => {
  const [login, setLogin]: [login, Function] = useState();
  const [password, setPassword]: [password, Function] = useState();
  const loginInputHandler = (event: any) => {
    setLogin(event.target.value);
  }
  const passwordInputHandler = (event: any) => {
    setPassword(event.target.value);
  }
  const request: Function = useRegister();
  const registerHandler = async () => {
    try {
      const data: Promise<Object> = await request("/api/auth/register", "POST", {login, password});  
    } catch (error) {
      console.log("Error:", error);
    }
  }
  const loginHandler = () => {
    //TODD
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