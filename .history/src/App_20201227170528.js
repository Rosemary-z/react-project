import "./App.css";
import React, { Component } from "react";
// import { Button } from 'antd';
import "antd/dist/antd.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login.jsx";
import Admin from "./pages/Admin/Admin";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} history={ this.props.history}/>
          <Route path="/" component={Admin} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
