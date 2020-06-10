import React, { Fragment } from 'react';
import Explore from './Explore'
import Backpack from './Backpack'
import Settings from './Settings'
import Profile from './Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const ActionScreen = (props) => {
    return ( 
        <Fragment>
            <Router>
                <Switch>
                    <Route to='/explore' render={(props) => <Explore {...props}/>}/>
                    <Route to='/backpack' render={(props) => <Backpack {...props}/>}/>
                    <Route to='/settings' render={(props) => <Settings {...props}/>}/>
                    <Route to='/profile' render={(props) => <Profile {...props}/>}/>
                </Switch>
            </Router>
        </Fragment>
     );
}
 
export default ActionScreen;