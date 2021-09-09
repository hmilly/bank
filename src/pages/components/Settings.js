import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Form from "./Form"

const Settings = ({ setMenu, user, setUser, blockBtns, setBlockBtns }) => {

    const [rounded, setRounded] = useState(false)
    const block = (e, blockBtns, setBlockBtns) => {
        e.preventDefault()
        setBlockBtns(!blockBtns)
        console.log("set",
        blockBtns
        )
    }

    const round = (e, user, setUser) => {
        e.preventDefault()
        let remainder = +(user.balance % 1).toFixed(2)
        setUser({ ...user, balance: user.balance -= remainder, savingsBal: user.savingsBal += remainder })
        setRounded(true)
        console.log("ran")
    }

    useEffect(() => {
        if (user.balance % 1 !== 0) { setRounded(false) }
    }, [user])

    console.log(user)
    return (
        <div className="settings">
            <div className="settingsTitle">
                <button onClick={() => setMenu(false)}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <h1>Settings</h1>
            </div>
            <div className="block">
                <p>Block account</p>
                <label className="switch">
                    <input type="checkbox" />
                    <button className="slider round" onClick={(e) => { block(e, blockBtns, setBlockBtns) }}></button>
                </label>
            </div>
            <div className="rounds">
                <p>Round expenses and
                    put into savings</p>
                <label className="switch">
                    <input type="checkbox" />
                    <button className="slider round"
                        disabled={rounded}
                        onClick={(e) => { round(e, user, setUser) }}></button>
                </label>
            </div>
            <h4>User</h4>
            <Form user={user} btnName={"Save"} />
        </div>
    )
}

export default Settings

