import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Auth } from "./components/auth/Auth";

export const useRoutes = (isAuth: boolean) => {
  if (isAuth) {
    return(
      <Switch>
        <Route path="/main" exact>

        </Route>
      </Switch>
    )
  } else {
    return(
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    )
  }
}