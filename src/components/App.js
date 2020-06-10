import React, { useState  } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Dashboard from "./Dashboard";

const App = (props) => {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState({isLoggedIn: true});

  const handleStateUpdate = (user) => {
    setUsers([...users, user]);
  };

  const handleActiveUser = (user) => {
    setActiveUser(user);
  }

  // useEffect(() => {
  //   if(localStorage) {
  //     const users = {...localStorage}
  //     users.map(user => console.log(user))
  //   }
  // })

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
          render={(props) =>
            activeUser.isLoggedIn ? (
              <Redirect to="/dashboard" />
            ) : (
              <Home
                {...props}
                activeUser={activeUser}
                setActiveUser={handleActiveUser}
                users={users}
                setUsers={handleStateUpdate}
              />
            )
          }
        />
        <Route
          path="/dashboard"
          render={(props) =>
            activeUser.isLoggedIn ? <Dashboard {...props} /> : null
          }
        />
        }
      </Switch>
    </Router>
  );
};

export default App;
