import React from "react";
import { BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import Nav from "./components/Nav";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import Calendar from "./pages/Calendar";
import Contacts from "./pages/Contacts";
import News from "./pages/News";
import WorkSpace from "./pages/Workspace/index";
import Facebook from "./pages/FacebookLogin";

import "./App.css";
var logout =function (){
  sessionStorage.setItem("userName", "null");
  sessionStorage.setItem("email", "null");
}
const App = () =>

  <Router>
    <div>
      <Nav 
      logout={logout}
      />
      <div style={{height:50+"px", backgroundColor:"blue", position:"static"}}></div>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/news" component={News} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/workspace" component={WorkSpace}/>
        <Route exact path="/login" component={Facebook} />
        <Route path="/home/:id" component={Home} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>;

export default App;
