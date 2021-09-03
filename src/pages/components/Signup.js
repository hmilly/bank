import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import man1 from "../img/man_1.png"

// selectedImg.addEventListener("change", (e) => {
//     let choice = e.target.files[0];
//     const sImg = document.querySelector(".userimg");
//     sImg.src = URL.createObjectURL(choice);
//   });

function Signup({ newUser, allUsers }) {
    let history = useHistory();
    const orderComplete = () => {
        const obj = Object.fromEntries(Object.entries(userInfo).slice(0, 5))
        newUser(obj)
        history.push("/")
    }

    const [userInfo, setUserInfo] = useState({})
    const handleChange = (e) => {
        const name = e.target.name
        const v = e.target.value
        setUserInfo({ ...userInfo, id: parseInt(allUsers.length) + 1, [name]: v })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = Object.values(userInfo)
        if (data.length < 6 || data.some(o => o === "")) {
            window.alert("You left some fields blank please try again")
        } else if (userInfo.pword !== userInfo.pwordmatch) {
            console.log(userInfo.pword, userInfo.pwordmatch)
            window.alert("You passwords do not match please try again")
        } else if (data.length === 6 && data.every(o => o !== "")) {
            const u = allUsers.find(u => u.email.toLowerCase() === userInfo.email.toLowerCase())
            !u ? orderComplete()
                : window.alert("Email entered is currently in use, please re-enter and try again")
        }
    }

    return (
        <>
            <div className="login-box">
                <div className="login-head"><p>Sign up</p></div>
                <form className="login-body">
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
                    <div className="uploadDiv">
                        <div className="uploadbtndiv">
                            <input type="file" /><p className="filep">Upload avatar</p>
                            <button className="uploadbtn">Upload</button>
                        </div>
                        <div className="uploadimgdiv">
                            <img className="usersimgchoice" src={man1} alt="man"></img>
                        </div>
                    </div>
                    <button className="su-login" onClick={(e) => handleSubmit(e)}>
                        Sign Up
                    </button>
                </form>
            </div>
        </>
    )
}

export default Signup
