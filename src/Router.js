import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./Routes/ProjectDetail";
import Home from "./Routes/Home";
import Blog from "./Routes/Blog";
import Conferenece from "./Routes/Conferenece";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./Styles/Home.css";
import "./Styles/BlogDetail.css";
import Login from "./Components/Auth/Login";
import BlogDetail from "./Routes/BlogDetail";
import ChatbotButton from "./Components/Chat/ChatbotButton";
import Chatbot from "./Components/Chat/Chatbot";

export default () => {
  return (
    <Router>
      <Route
        render={({ location }) => {
          const path = location.pathname.split("/")[1];
          return (
            <>
              <Login />
              <Chatbot></Chatbot>
              <ChatbotButton></ChatbotButton>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={1000}
                  classNames={
                    path === "post"
                      ? "post"
                      : path === "blogDetail"
                      ? "blog-detail"
                      : "main"
                  }
                  appear
                >
                  <Switch location={location}>
                    <Route path="/" exact component={Home} />
                    <Route path="/post/:id" component={Detail} />
                    <Route path="/Blog" exact component={Blog} />
                    <Route
                      path="/blogDetail/:id"
                      exact
                      component={BlogDetail}
                    />
                    <Route path="/Conference" exact component={Conferenece} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </>
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
