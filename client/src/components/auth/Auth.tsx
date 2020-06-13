import React from "react";
import classes from "./styles/Auth.module.css";
import logo from "./img/logo.svg";

export const Auth = () => {
  return(
    <div className={classes.window}>
      <img src={logo} alt="Please wait" className={classes.logo}/>
      <input type="text" placeholder="Username" className={classes.login}/>
      <input type="text" placeholder="Password" className={classes.password}/>
      <div className={classes.buttons}>
        <button className={classes.signup_btn}>Sign up</button>
        <button className={classes.login_btn}>Login</button>
      </div>
      
    </div>
  )
}