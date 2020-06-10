import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Signin";
import Signup from "./Signup";

const Home = ({ activeUser, setActiveUser, users, setUsers }) => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/signin"
            render={(props) => (
              <Signin
                {...props}
                activeUser={activeUser}
                setActiveUser={setActiveUser}
              />
            )}
          />
          <Route
            path="/signup"
            render={(props) => (
              <Signup {...props} users={users} setUsers={setUsers} />
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default Home;
