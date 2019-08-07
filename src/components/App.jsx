import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Login, Register, Main, Searching, Upload, Profile, Follow } from "pages";
class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} props = {this.props}/>
          <Route exact path="/register" component={Register} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/search" component={Searching} />
          <Route exact path="/follow" component={Follow} />
          <Route exact path="/upload" component={Upload} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </>
    );
  }
}

export default App;
