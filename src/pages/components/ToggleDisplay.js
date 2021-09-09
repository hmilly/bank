import React, { useState } from 'react'

const ToggleDisplay = ({ name, details, user, setDetails, setUser, bal, transactions }) => {
    const [num, setNum] = useState(0)
    const handleNum = (n) => +parseFloat(n).toFixed(2)

    const handleSubmit = (e, user, name, bal) => {
        e.preventDefault()
        if (details.type === "in") {
            setUser({
                ...user,
                balance: handleNum(user.balance -= num),
                [`${name}sBal`]: handleNum(bal += num),
                transactions: [...user.transactions, { transName: name, minus: num }],
                [`${name}sTran`]: [...transactions, { transName: name, plus: num }]
            })
        } else {
            setUser({
                ...user,
                balance: handleNum(user.balance += num),
                [`${name}sBal`]: handleNum(bal -= num),
                transactions: [...user.transactions, { transName: name, plus: num }],
                [`${name}sTran`]: [...transactions, { transName: name, minus: num }]
            })
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
            <button className="transfer" onClick={(e) => handleSubmit(e, user, name, bal)}>Transfer</button>
        </form>
    )
}

export default ToggleDisplay