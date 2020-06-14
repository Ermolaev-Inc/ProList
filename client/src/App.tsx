import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useRoutes } from "./routes";
import { AuthContext } from "./context/AuthContext";
import { useLogin } from "./hooks/login.hook";

function App() {
  const { login, token, userId } = useLogin();
  const isAuth = !!token;
  const routes = useRoutes(isAuth);
  return (
    <AuthContext.Provider value={{
      login, token, userId, isAuth
    }}>
      <Router>
        <div className="wrapper">
          { routes }
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
