import React, { useState } from 'react'
import { today, updateUser } from "./fns"

const ToggleDisplay = ({ name, details, user, setDetails, setUser, bal, transactions, blockBtns }) => {
    const [num, setNum] = useState(0)

    const setin = () => {
        updateUser({
            ...user,
            balance: user.balance - num,
            [`${name}Bal`]: bal + num,
            transactions: [...user.transactions, { transName: name, minus: num, date: today }],
            [`${name}Tran`]: [...transactions, { transName: name, plus: num, date: today }]
        }, setUser)
    }

    const setout = () => {
        updateUser({
            ...user,
            balance: user.balance + num,
            [`${name}Bal`]: bal - num,
            transactions: [...user.transactions, { transName: name, plus: num, date: today }],
            [`${name}Tran`]: [...transactions, { transName: name, minus: num, date: today }]
        }, setUser)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (num > 0) {
            if (name === "savings" && details.type === "out")
                user.savingsBal - num < 0
                    ? window.alert("Not enough money in savings!")
                    : setout()
            else if (name === "savings" && details.type === "in") setin()
            else if (name === "loans" && details.type === "out") setout()
            else if (name === "loans" && details.type === "in")
                user.loansBal + num > 0
                    ? window.alert("Amount exceeds loan value!")
                    : setin()
            setDetails({ ...details, state: false })
        } else {
            window.alert("Please enter a number above 0")
        }
    }

    return (
        <form className="toggle">
            <div>
                <p>£</p>
                <input
                    type="number"
                    min={0} step={0.10}
                    onChange={(e) => setNum(+parseFloat(e.target.value).toFixed(2) )}>
                </input>
            </div>
            <button className="transfer"
                disabled={blockBtns}
                onClick={(e) => handleSubmit(e)}>Transfer</button>
        </form>
    )
}

export default ToggleDisplay