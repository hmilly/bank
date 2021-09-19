import React from 'react'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Form from "./Form"

// selectedImg.addEventListener("change", (e) => {
//     let choice = e.target.files[0];
//     const sImg = document.querySelector(".userimg");
//     sImg.src = URL.createObjectURL(choice);
//   });

const Signup = ({ user, setUser, allUsers }) => {
    let history = useHistory();
    return (
        <div className="login">
            <section>
                <button onClick={() => history.push("/")}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <p>Sign up</p>
            </section>
            <Form setUser={setUser} user={user} allUsers={allUsers} btnName={"Sign Up"} />
        </div>
    )
}

export default Signup
