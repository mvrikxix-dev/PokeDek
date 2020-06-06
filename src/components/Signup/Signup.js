import React from 'react';
import './Signup.css'
import User from '../../model/User'

const Signup = (props) => {

    let username, email, password
    const handleInput = (event) => {
        const {name, value} = event.target
        if(name === "username")
            username = value
        else if(name === "email")
            email = value
        else if (name === "password")
            password = value
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const user = new User(username, email, password)
        localStorage.setItem(`${user.username}`, JSON.stringify(user))
    }

    return(
        <form className="form-container">
            <input 
                type="text" 
                name="username" 
                onChange={handleInput} 
                placeholder="Username" 
                className="form-element" 
                id="username" />
            <input 
                type="email" 
                name="email" 
                onChange={handleInput} 
                placeholder="Email Address" 
                className="form-element" 
                id="email-id" />
            <input 
                type="password" 
                name="password" 
                onChange={handleInput} 
                placeholder="Password" 
                className="form-element" 
                id="password" />
            <input 
                type="password" 
                name="confirmPassword" 
                onChange={handleInput} 
                placeholder="Confirm Password" 
                className="form-element" 
                id="confirm-password" />
            <button onClick={handleSubmit} className="btn" id="signup-Btn">Sign Up</button>
        </form>
    )
}

export default Signup