import React, { useState, useEffect } from 'react';

export default function SignUpForm(props) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [login, setLogin] = useState("false")

    useEffect(() => {
        localStorage.removeItem('token')
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault()
        let user = {
            username, 
            password
        }

        login 
            ? props.login(user)
                .then(() => props.history.push('/'))
                // .then(<p>Welcome, {user.name} </p>)
            : props.signUp(user)
                .then(() => props.history.push('/'))
    }

    const handleChange = ({target}) => {
        return target.name === "username" 
            ? setUsername(target.value) 
            : setPassword(target.value)
    }

    const handleLoginForm = (event) => {
        event.preventDefault()
        setLogin(!login)
    }

    const showAlerts = () => props.alerts.map(alert => <p className="error-red">{alert}</p>)
    

     return (
        <form className="signup-form" onSubmit={handleSubmit}> 
            {login ? <h2>Log In</h2> : <h2>Sign Up</h2>}
            <label>Username</label>
            <input name="username" value={username} onChange={handleChange} />
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={handleChange} />
            <div class="submit-login">
                <input type="submit" />
            </div>
            {props.alerts ? showAlerts() : null }
            {login

                ? <div class="no-profile-query">                
                    <p>Don't Have a Profile? <button onClick={handleLoginForm} >Sign Up</button></p>
                </div>
                : 
                <div class="sign-in-query">
                    <p>Already Have a Profile? <button onClick={handleLoginForm} >Log In</button></p>
                </div>
            }
        </form>
    )
}
