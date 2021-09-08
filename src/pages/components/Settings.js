import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Form from "./Form"
import {block, round} from "./fns"

const Settings = ({ setMenu, user}) => {
    console.log(user)
        return (
        <div className="settings">
            <div className="settingsTitle">
                <a onClick={() => setMenu(false)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </a>
                <h1>Settings</h1>
            </div>
            <div className="block">
                <p>Block account</p>
                <label className="switch">
                    <input type="checkbox" />
                    <button className="slider round"></button>
                </label>
            </div>
            <div className="rounds">
                <p>Round expenses and
                    put into savings</p>
                <label className="switch">
                    <input type="checkbox" />
                    <button className="slider round" onClick={(e)=>{round(e, user)}}></button>
                </label>
            </div>
            <h4>User</h4>
            <Form user={user} btnName={"Save"} />
        </div>
    )
}

export default Settings

