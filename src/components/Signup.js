import React from 'react';
import User from '../model/User'
import { useHistory } from 'react-router-dom';
import './Form.css'

const Signup = (props) => {
    console.log(props)
    const history = useHistory()
    let username = ""
    let email = ""
    let password = ""
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
        if(username !== "" && email !== "" && password !== "") {
            const user = new User(username, email, password)
            localStorage.setItem(`${user.username}`, JSON.stringify(user))
            props.setUsers(user)
            history.push('/signin')
        } else{
            alert('Kindly fill in the details')
        }
    }

    return(
        <form className="form-container">
            <div className="form-title">Sign In</div>
            <p className="tagline">should I call you Ash Ketchum?</p>
            <input 
                type="text" 
                name="username" 
                value = {props.users.username}
                onChange={handleInput} 
                placeholder="Username" 
                className="form-element" 
                id="username" 
                required/>
            <input 
                type="email" 
                name="email" 
                value = {props.users.email}
                onChange={handleInput} 
                placeholder="Email Address" 
                className="form-element" 
                id="email-id" 
                required/>
            <input 
                type="password" 
                name="password" 
                value = {props.users.password}
                onChange={handleInput} 
                placeholder="Password" 
                className="form-element" 
                id="password" 
                required/>
            <input 
                type="password" 
                name="confirmPassword" 
                value = {props.users.password}
                onChange={handleInput} 
                placeholder="Confirm Password" 
                className="form-element" 
                id="confirm-password" 
                required/>
            <button onClick={handleSubmit} className="btn" id="signup-Btn">Sign Up</button>
        </form>
    )
}

export default Signup