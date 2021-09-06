import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Form from "./Form"

function Settings({ setMenu, user }) {
    return (
        <div className="settings">
            <div className="settingsTitle">
                <a onClick={() => setMenu(false)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </a>
                <h1>Settings</h1>
            </div>
            <div className="blockacc">
                <p>Block account</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            <div className="rounds">
                <p>Round expenses and
                    put into savings</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
            </div>
            <h4 className="user">User</h4>
            <Form user={user} btnName={"Save"} />
        </div>
    )
}

export default Settings

