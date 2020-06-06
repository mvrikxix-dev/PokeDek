import React, { useState } from 'react';
import './App.css';
import Signup from './components/Signup/Signup'

const App = (props) => {

  const [users, setUsers] = useState([])

  return (
    <div className="App">
      <Signup userData={users}/>
    </div>
  );
}

export default App;

