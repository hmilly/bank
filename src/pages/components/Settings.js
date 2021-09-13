import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Form from "./Form"

const Settings = ({ setMenu, user, setUser, blockBtns, setBlockBtns }) => {

    const [rounded, setRounded] = useState(false)

    const round = (user, setUser) => {
        let remainder = +((user.balance % 1).toFixed(2))
        if (!rounded)
            setUser({
                ...user,
                balance: user.balance -= remainder,
                savingsBal: user.savingsBal += remainder,
                transactions: [...user.transactions, { transName: "savings", minus: remainder }],
                savingsTran: [...user.savingsTran, { transName: "savings", plus: remainder }]
            })
        setRounded(true)
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
                    <input type="checkbox" onChange={() => setBlockBtns(!blockBtns)}></input>
                    <span className="slider"></span>
                </label>
            </div>
            <div className="rounds">
                <p>Round expenses and
                    put into savings</p>
                <label className="switch">
                    <input type="checkbox" onChange={() => round(user, setUser)} checked={rounded} />
                    <span className="slider round"
                        disabled={rounded}></span>
                </label>
            </div>
            <h4>User</h4>
            <Form user={user} btnName={"Save"} setUser={setUser} />
        </div>
    )
}

export default Settings

