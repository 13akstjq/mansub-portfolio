import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Views/Detail";
import Home from "./Views/Home";
import Blog from "./Views/Blog";
import Conferenece from "./Views/Conferenece";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:category/:id" component={Detail} />
        <Route path="/Blog" exact component={Blog} />
        <Route path="/Conference" exact component={Conferenece} />
      </Switch>
    </Router>
  );
};
