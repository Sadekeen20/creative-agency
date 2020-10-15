import React, { createContext, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Orderdashboard from './components/Order/Orderdashboard/Orderdashboard';
import Orderadd from './components/Order/Orderadd/Orderadd';
export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    {/* <p style={{textAlign: 'center'}}>Hi , {loggedInUser.name} </p> */}
    <Router>
      {/* <Header /> */}
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route> */}
        
        <PrivateRoute path="/order/:worktitle">
          <Orderadd></Orderadd>
        </PrivateRoute>
        {/* <Route path="/order/:worktitle">
          <Orderadd></Orderadd>
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
