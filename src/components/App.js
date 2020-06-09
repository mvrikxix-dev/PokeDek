import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Dashboard from './Dashboard'

const App = (props) => {

  const [users, setUsers] = useState([])
  const [activeUser, setActiveUser] = useState({isLoggedIn: false})

  const handleStateUpdate = (user) => {
    setUsers([...users, user])
  } 

  useEffect(() => {console.log(activeUser)},[activeUser])

  const handleActiveUser = (user) => {
    setActiveUser(user)
  }

  return (
    <Router>
      <Switch>
        <Route 
          exact path="/" 
          render = {(props) => <Home {...props} activeUser={activeUser} setActiveUser={handleActiveUser} users={users} setUsers={handleStateUpdate}/>}
        />
        <Route 
          path="/dashboard"
          render = {() => activeUser.isLoggedIn ? <Dashboard /> : <Home />}
        />
      </Switch>
    </Router>
  );
}

export default App;

