import React, {lazy} from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import HomePage from "../homepage/HomaPage";
import Login from "../on-board/Login";
import Task from "../Task";
import User from "../User";



export const PublicRoutes = ({ setIsLogin }) => (
    // console.log("route12",setIsLogin)

  <Switch>
   
   <Route
      exact
      path="/Login"
      render={props => <Login {...props} setIsLogin={setIsLogin} />}
    />
     <Route
      render={props => <Login {...props} setIsLogin={setIsLogin} />}
    />
  </Switch>
);
export const PrivateRoutes = ({ setIsLogin }) => {
  return (
    <Switch>
    <Route exact path="/HomePage" 
      render={props => <HomePage {...props} setIsLogin={setIsLogin} />}
      />
      <Route exact path="/task" component={Task}></Route>
      <Route exact path="/user" component={User}></Route>

    </Switch>
  );
};
