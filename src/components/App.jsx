import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Login, Register } from "pages";
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </>
    );
  }
}

export default App;
