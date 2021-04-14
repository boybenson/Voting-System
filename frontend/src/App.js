import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LoginScreen from "./screen/LoginScreen";
import RegisterScreen from "./screen/RegisterScreen";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/auth/login" component={LoginScreen} />
        <Route path="/auth/register" component={RegisterScreen} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
