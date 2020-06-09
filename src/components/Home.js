import React from 'react';
import Navbar from './Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Signin from './Signin'
import Signup from './Signup'

const Home = (props) => {
    console.log(props)
    return(
        <Router>
            <div>
            <Navbar />
            <Switch>
                <Route 
                    path="/signin"
                    render={(props) => <Signin {...props} activeUser={props.activeUser} setActiveUser={props.setActiveUser}/>} 
                />
                <Route 
                    path="/signup"
                    render={(props) => <Signup {...props} users={props.users} setUsers={props.setUsers}/>} 
                />
            </Switch>
            </div>
        </Router>
    )
}

export default Home