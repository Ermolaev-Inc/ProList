import React, { useState } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Auth } from "./components/auth/Auth";
import { AppContainer } from "./components/app/AppContainer";
import { SettingsContainer } from "./components/settings/SettingsContainer";

export const useRoutes = (isAuth: boolean) => {
  let [isSettings, setSettings]: [boolean, Function] = useState(false);
  const showSettings = (): void => {
    setSettings(true);
  }
  if (isAuth) {
    return(
      <Switch>
        <Route path="/" >
          {!isSettings && <AppContainer showSettings={setSettings}/>}
          {isSettings && <SettingsContainer />}
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