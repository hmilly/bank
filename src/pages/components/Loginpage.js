import React, { useState, useEffect } from 'react'
import { useHistory, Link } from "react-router-dom";

const LoginPage = ({ updateUser, user, allUsers }) => {
    const history = useHistory();

    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPword, setEnteredPword] = useState("")

    useEffect(() => {
        allUsers.find(e => { if (e.email === enteredEmail) updateUser(e) })
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (user.email === enteredEmail.toLowerCase() && user.pword === enteredPword) {
            history.push("/wallet")
        } else {
            window.alert("Incorrect details - please try again!")
        }
    }

    return (
        <div className="login">
            <section>
                <p>Login</p>
            </section>
            <form onSubmit={handleSubmit} >
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e) => setEnteredEmail(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" onChange={(e) => setEnteredPword(e.target.value)} />
                <button>Login</button>
                <span className="signup">
                    <Link to="/signup">Sign up</Link>
                </span>
            </form>
        </div>
    )
}

export default LoginPage