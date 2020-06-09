import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom'
import './Form.css'

const Signin = (props) => {
    console.log(props.activeUser)
    const history = useHistory()
    let username = "" 
    let password = ""  

    const handleInput = (event) => {
        const {name, value} = event.target
        if(name === "username")
            username = value
        else if (name === "password")
            password = value
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(localStorage.getItem(username)){
            const active = JSON.parse(localStorage.getItem(username))
            if(active.password === password){
                active.isLoggedIn = true
                localStorage.setItem(username, JSON.stringify(active))
                props.setActiveUser(active)
                history.push('./dashboard')

            } else {
                alert('Invalid Credentials')
            }
        } else {
            alert('Invalid Credentials')
        }
    }

    return(
        <Fragment>
            <div className="close"></div>
            <form className="form-container">
                <div className="form-title">Sign In</div>
                <p className="tagline">let's go catch 'em all</p>
                <input 
                    type="text" 
                    name="username" 
                    onChange={handleInput} 
                    placeholder="Username" 
                    className="form-element" 
                    id="username" 
                    required/>
                <input 
                    type="password" 
                    name="password" 
                    onChange={handleInput} 
                    placeholder="Password" 
                    className="form-element" 
                    id="password" 
                    required/>
                <button onClick={handleSubmit} className="btn" id="signin-Btn">Sign In</button>
            </form>
        </Fragment>
    )
}
 
export default Signin;