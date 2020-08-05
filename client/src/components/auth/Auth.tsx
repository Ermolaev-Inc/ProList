import React, { useState, useContext } from "react";
import { useHttp } from "../../hooks/http.hook";
import classes from "./styles/Auth.module.css";
import logo from "./img/logo.svg";
import { login, password } from "../../types";
import { AuthContext } from "../../context/AuthContext";
import { IDataLogin, IDataRegister } from "../../interfaces";
import { ThemeContext } from "../../context/ThemeContext";
import { Theme } from "../../context/ThemeContext";
import { ChangeThemeButton } from "./ChangeThemeButton";

export const Auth = () => {
  let [notificationStyles, setNotificationStyles] = useState(classes.failed);
  let [notificationText, setNotificationText] = useState("");
  const checkSuccessAuth = (successfully: boolean) => {
    if (!successfully) {
      notifyUserAboutFailed(true);
    }
  }
  const notifyUserAboutFailed = (failed: boolean) => {
    if (failed) {
      setNotificationText("Failed");
      setNotificationStyles(classes.failed);
      setTimeout(() => {
        setNotificationText("");
        setNotificationStyles(classes.failed);
      }, 3000)
    }
  }
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
      const data: IDataRegister = await request("/api/auth/register", "POST", {login, password});
      checkSuccessAuth(data.successfully);  
    } catch (error) {
      console.log("Error:", error);
    }
  }
  const loginHandler = async () => {
    try {
      const data: IDataLogin = await request("/api/auth/login", "POST", {login, password});
      checkSuccessAuth(data.successfully);
      auth.login(data.token, data.userId);
    } catch (error) {
      console.log("Error", error);
    }
  }
  debugger
  return(
    <ThemeContext.Consumer>
      {({theme, changeTheme}) => (
        <div className={theme === Theme.LIGHT ? classes.window : classes.window_dark}>
          <img src={logo} alt="Please wait" className={classes.logo}/>
          <input type="text" placeholder="Username" name="login" onChange={loginInputHandler} className={classes.login}/>
          <input type="password" placeholder="Password" name="password" onChange={passwordInputHandler} className={classes.password}/>
          <div className={classes.buttons}>
            <button className={classes.signup_btn} onClick={registerHandler}>Sign up</button>
            <button className={classes.login_btn} onClick={loginHandler}>Login</button>
          </div>
          <div className={classes.notify_form}>
            <div className={notificationStyles}>{notificationText}</div>
          </div>
          <ChangeThemeButton changeTheme={changeTheme} theme={theme} />
        </div>
      )}
    </ThemeContext.Consumer>
  )
}
