import React from 'react'
import { useHistory } from "react-router-dom";
import Form from "./Form"

// selectedImg.addEventListener("change", (e) => {
//     let choice = e.target.files[0];
//     const sImg = document.querySelector(".userimg");
//     sImg.src = URL.createObjectURL(choice);
//   });

function Signup({ newUser, allUsers }) {
    let history = useHistory();
    return (
        <div className="login-box">
            <div className="login-head">
                <p>Sign up</p>
            </div>
            <Form user={newUser} allUsers={allUsers} btnName={"Sign Up"} />
        </div>
    )
}

export default Signup
