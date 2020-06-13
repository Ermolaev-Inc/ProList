import React, { useState } from "react";
import classes from "./styles/Auth.module.css";
import logo from "./img/logo.svg";

export const Auth = () => {
  const [login, setLogin] = useState();
  const [password, setPassword] = useState();
  const loginHandler = (event: any) => {
    setLogin(event.target.value);
  }
  const passwordHandler = (event: any) => {
    setPassword(event.target.value);
  }
  return(
    <div className={classes.window}>
      <img src={logo} alt="Please wait" className={classes.logo}/>
      <input type="text" placeholder="Username" name="login" onChange={loginHandler} className={classes.login}/>
      <input type="text" placeholder="Password" name="password" onChange={passwordHandler} className={classes.password}/>
      <div className={classes.buttons}>
        <button className={classes.signup_btn}>Sign up</button>
        <button className={classes.login_btn}>Login</button>
      </div>
      
    </div>
  )
}
