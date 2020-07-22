import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import Dashboard from './components/pages/Dashboard';
import NavBar from './components/navbar/NavBar';

function App() {
  return (
    <div>
      {/* <NavBar /> */}
    <div className="App">
      <h1>Essentialism Project</h1>
      {/* <Switch>
       <Route exact path="/">
         <HomePage />
       </Route>
       <Route path="/login">
         <LoginPage />
       </Route>
       <PrivateRoute exact path="/dashboard" component={Dashboard} />
     </Switch> */}
    </div>
    </div>
  );
}

export default App;
