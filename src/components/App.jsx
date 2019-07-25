import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Login, Register, Main, Searching, Reply, Upload, Profile } from "pages";
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/search" component={Searching} />
          <Route exact path="/reply" component={Reply} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </>
    );
  }
}

export default App;
