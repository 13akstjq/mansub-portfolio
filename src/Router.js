import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Views/Detail";
import Home from "./Views/Home";
import Blog from "./Views/Blog";
import Conferenece from "./Views/Conferenece";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./Styles/Home.css";
export default () => {
  return (
    <Router>
      <Route
        render={({ location }) => {
          console.log(location);
          const path = location.pathname.split("/")[1];
          return (
            <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={1000}
                classNames={path === "post" ? "post" : "main"}
                appear
              >
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/post/:id" component={Detail} />
                  <Route path="/Blog" exact component={Blog} />
                  <Route path="/Conference" exact component={Conferenece} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          );
        }}
      />

      {/* 애니메이션 없는 버전  */}
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/post/:id" component={Detail} />
        <Route path="/Blog" exact component={Blog} />
        <Route path="/Conference" exact component={Conferenece} />
      </Switch> */}
    </Router>
  );
};
