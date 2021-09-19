import React, { useState } from 'react'
import { today } from "./fns"

const ToggleDisplay = ({ name, details, user, setDetails, setUser, bal, transactions, blockBtns }) => {
    const [num, setNum] = useState(0)
    const handleNum = (n) => +(parseFloat(n).toFixed(2))

    const setin = () => {
        setUser({
            ...user,
            balance: handleNum(user.balance -= num),
            [`${name}Bal`]: handleNum(bal += num),
            transactions: [...user.transactions, { transName: name, minus: num, date: today }],
            [`${name}Tran`]: [...transactions, { transName: name, plus: num, date: today }]
        })
    }

    const setout = () => {
        setUser({
            ...user,
            balance: handleNum(user.balance += num),
            [`${name}Bal`]: handleNum(bal -= num),
            transactions: [...user.transactions, { transName: name, plus: num, date: today }],
            [`${name}Tran`]: [...transactions, { transName: name, minus: num, date: today }]
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name === "savings" && details.type === "out")
            handleNum(user.savingsBal -= num) < 0
                ? window.alert("Not enough money in savings!")
                : setout()
        else if (name === "loans" && details.type === "in")
            handleNum(user.loansBal += num) > 0
                ? window.alert("Amount exceeds loan value!")
                : setin()
        else if (name === "savings" && details.type === "in") setin()
        else if (name === "loans" && details.type === "out") setout()
        setDetails({ ...details, state: false })
    }

    return (
        <form className="toggle">
            <div>
                <p>£</p>
                <input
                    type="number"
                    min={0} step={0.10}
                    onChange={(e) => setNum(handleNum(e.target.value))}>
                </input>
            </div>
            <button className="transfer"
                disabled={blockBtns}
                onClick={(e) => handleSubmit(e)}>Transfer</button>
        </form>
    )
}

export default ToggleDisplay