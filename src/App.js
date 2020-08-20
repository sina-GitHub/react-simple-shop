import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Users from "./pages/Users";
import Authentication from "./pages/Authentication";
import UserSearchStore from "./data store/UserSearchStore";

function App() {
  return (
    <UserSearchStore>
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/authentication" component={Authentication} />
        </Switch>
      </Router>
    </UserSearchStore>
  );
}

export default App;
