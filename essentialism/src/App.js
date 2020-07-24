import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
// import PrivateRoute from './utils/PrivateRoute';
import HomePage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import Dashboard from "./components/pages/Dashboard";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
