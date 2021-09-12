import React, { useState } from 'react'
import {today} from "./fns"

const ToggleDisplay = ({ name, details, user, setDetails, setUser, bal, transactions, blockBtns }) => {
    const [num, setNum] = useState(0)
    const handleNum = (n) => +(parseFloat(n).toFixed(2))

    const handleSubmit = (e, user, name, bal, today) => {
        e.preventDefault()
        details.type === "in"
            ? setUser({
                ...user,
                balance: handleNum(user.balance -= num),
                [`${name}Bal`]: handleNum(bal += num),
                transactions: [...user.transactions, { transName: name, minus: num, today: today }],
                [`${name}Tran`]: [...transactions, { transName: name, plus: num, today: today }]
            })
            : setUser({
                ...user,
                balance: handleNum(user.balance += num),
                [`${name}Bal`]: handleNum(bal -= num),
                transactions: [...user.transactions, { transName: name, plus: num, today: today }],
                [`${name}Tran`]: [...transactions, { transName: name, minus: num, today: today }]
            })
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
                onClick={(e) => handleSubmit(e, user, name, bal, today)}>Transfer</button>
        </form>
    )
}

export default ToggleDisplay