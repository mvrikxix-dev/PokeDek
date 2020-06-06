import React, { useState, useEffect } from 'react';
import './App.css';
import Signup from './components/Signup/Signup'

const App = (props) => {

  const [users, setUsers] = useState([])

  const handleStateUpdate = (user) => {
    setUsers([...users, user])
  } 

  useEffect(() => {console.log(users)}, [users])

  return (
    <div className="App">
      <Signup usersState={users} setUsersState = {handleStateUpdate}/>
    </div>
  );
}

export default App;

