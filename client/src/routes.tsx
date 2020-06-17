import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Auth } from "./components/auth/Auth";
import { AppContainer } from "./components/app/AppContainer";

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return(
      <Switch>
        <Route path="/" >
          <AppContainer />
        </Route>
      </Switch>
    )
  } else {
    return(
      <Switch>
        <Route path="/" >
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
}