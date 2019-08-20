import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Views/Detail";
import Home from "./Views/Home";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:category/:id" component={Detail} />
      </Switch>
    </Router>
  );
};
