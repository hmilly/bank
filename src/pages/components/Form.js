import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { setNewUser, updateUser } from "./fns"

const Form = ({ setUser, allUsers = [], btnName, allUsers, setAllUsers }) => {
    const [userInfo, setUserInfo] = useState({})

    let history = useHistory();

    const addUser = () => {
        const obj = Object.fromEntries(Object.entries(userInfo).slice(0, 5))
        setNewUser(obj, allUsers, setAllUsers)
        history.push("/")
    }

    const modifyUser = (u, btnName) => {
        const obj = Object.fromEntries(Object.entries(u).slice(0, 5))

        if (btnName === "Submit") {
            updateUser(obj, allUsers, setAllUsers)
        } else {
            window.alert("Email entered is currently in use, please re-enter and try again")
        }
    }


    const handleChange = (e) => {
        const name = e.target.name
        const v = e.target.value
        setUserInfo({ ...userInfo, id: parseInt(allUsers.length) + 1, [name]: v })
    }

    const handleSubmit = (e, btnName) => {
        e.preventDefault()
        const data = Object.values(userInfo)
        if (data.length < 6 || data.some(o => o === "")) {
            window.alert("You left some fields blank please try again")
        } else if (userInfo.pword !== userInfo.pwordmatch) {
            window.alert("You passwords do not match please try again")
        } else if (data.length === 6 && data.every(o => o !== "")) {
            const u = allUsers.find(u => u.email.toLowerCase() === userInfo.email.toLowerCase())
            !u ? addUser(userInfo)
                : modifyUser(u, btnName)
        }
    }

    const handleSave = (e, setUser) => {
        e.preventDefault()
        setUser({})
        console.log("update user")
    }

    return (
        <form className="form">
            <label htmlFor="firstName">First name</label>
            <input type="text" name="firstName" required onChange={(e) => handleChange(e)}></input>
            <label htmlFor="lastName">Last name</label>
            <input type="text" name="lastName" required onChange={(e) => handleChange(e)}></input>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required onChange={(e) => handleChange(e)}></input>
            <label htmlFor="password">Password</label>
            <input type="password" name="pword" required onChange={(e) => handleChange(e)}></input>
            <label htmlFor="password">Confirm Password</label>
            <input type="password" name="pwordmatch" required onChange={(e) => handleChange(e)}></input>
            <button id="su-login"
                onClick={(e) => handleSubmit(e, btnName)}>
                {btnName}
            </button>
        </form>
    )
}

export default Form