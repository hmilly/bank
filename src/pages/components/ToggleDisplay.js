import React, { useState } from 'react'
import { today } from "./fns"

const ToggleDisplay = ({ name, details, user, setDetails, setUser, bal, transactions, blockBtns }) => {
    const [num, setNum] = useState(0)
    const handleNum = (n) => +(parseFloat(n).toFixed(2))

    const setin = (user, name, bal, today) => {
        setUser({
            ...user,
            balance: handleNum(user.balance -= num),
            [`${name}Bal`]: handleNum(bal += num),
            transactions: [...user.transactions, { transName: name, minus: num, today: today }],
            [`${name}Tran`]: [...transactions, { transName: name, plus: num, today: today }]
        })
    }

    const setout = (user, name, bal, today) => {
        setUser({
            ...user,
            balance: handleNum(user.balance += num),
            [`${name}Bal`]: handleNum(bal -= num),
            transactions: [...user.transactions, { transName: name, plus: num, today: today }],
            [`${name}Tran`]: [...transactions, { transName: name, minus: num, today: today }]
        })
    }

    const handleSubmit = (e, details, user, name, bal, today) => {
        e.preventDefault()
        console.log(details, name, bal)
        if (name === "savings" && details.type === "out") {
            handleNum(user.savingsBal -= num) < 0
                ? window.alert("Not enough money in savings!")
                : setout(user, name, bal, today)
        } else if (name === "savings" && details.type === "in") {
            setin(user, name, bal, today)
        } else if (name === "loans" && details.type === "in") {
            handleNum(user.loansBal += num) > 0
                ? window.alert("Amount exceeds loan value!")
                : setin(user, name, bal, today)
        } else if (name === "loans" && details.type === "out") {
            setout(user, name, bal, today)
        }
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
                onClick={(e) => handleSubmit(e, details, user, name, bal, today)}>Transfer</button>
        </form>
    )
}

export default ToggleDisplay