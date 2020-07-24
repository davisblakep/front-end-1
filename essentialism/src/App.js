import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
// import PrivateRoute from './utils/PrivateRoute';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/pages/Dashboard';
import NavBar from './components/navbar/NavBar';
import DashboardValues from './components/pages/DashboardValues';
import CreateUserPage from './components/pages/CreateUserPage';

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
       <Route path="/createuser">
         <CreateUserPage />
       </Route>
       {/* <PrivateRoute exact path="/dashboard" component={Dashboard} /> */}
       <Route exact path="/dashboard">
         <Dashboard />
       </Route>
       <Route path="/dashboard/values">
         <DashboardValues />
       </Route>
     </Switch> 
    </div>
    </div>
  );
}

export default App;
