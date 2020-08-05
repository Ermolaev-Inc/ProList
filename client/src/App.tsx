import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { AuthContext } from "./context/AuthContext";
import { ThemeContext } from "./context/ThemeContext";
import { useLogin } from "./hooks/login.hook";
import { Theme } from "./context/ThemeContext";

function App() {
  const {login, token, userId} = useLogin();
  const isAuth = !!token;
  const routes = useRoutes(isAuth);
  const identifyTheme = (): any => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", Theme.LIGHT);
      return Theme.LIGHT;
    } else if (localStorage.getItem("theme") === Theme.LIGHT) {
      return Theme.LIGHT;
    } else {
      return Theme.DARK;
    }
  }
  let [theme, setTheme]: [any, Function] = useState(identifyTheme);
  let changeTheme = () => {
    if (theme === Theme.LIGHT) {
      localStorage.setItem("theme", Theme.DARK);
      setTheme(Theme.DARK);
    } else {
      localStorage.setItem("theme", Theme.LIGHT);
      setTheme(Theme.LIGHT);
    }
  }
  return (
    <AuthContext.Provider value={{
      login, token, userId, isAuth
    }}>
      <ThemeContext.Provider value={{
        theme, changeTheme
      }}>
        <Router>
          <div className="wrapper">
            { routes }
          </div>
        </Router>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
