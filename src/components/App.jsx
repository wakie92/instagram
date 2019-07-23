import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Login, Register, Main } from "pages";
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/main" component={Main} />
        </Switch>
      </>
    );
  }
}

export default App;
