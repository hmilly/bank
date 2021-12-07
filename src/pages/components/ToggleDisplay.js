import React, { useState, useEffect } from 'react'
import { today, updateUser } from "../fns/fns"

const ToggleDisplay = ({ name, details, user, setDetails, setUser, bal, transactions, blockBtns }) => {
    const [num, setNum] = useState(0)
    const [errorMsg, setErrorMsg] = useState("")

    useEffect(() => {
        setTimeout(() => {
            setErrorMsg("")
        }, 5000);
    }, [errorMsg])

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
        console.log(details.type)
        e.preventDefault()
        if (num > 0) {
            if (name === "savings" && details.type === "out")
                user.savingsBal - num < 0
                    ? setErrorMsg("Not enough money in savings!")
                    : setout()
            else if (name === "savings" && details.type === "in") setin()
            else if (name === "loans" && details.type === "out") setout()
            else if (name === "loans" && details.type === "in")
                user.loansBal + num > 0
                    ? setErrorMsg("Amount exceeds loan value!")
                    : setin()
            errorMsg !== "" && setDetails({ ...details, state: false })
        } else {
            setErrorMsg("Please enter a number above 0")
        }
    }

    return (
        <>
            <form className="toggle">
                <section>
                    <p>£</p>
                    <input
                        type="number"
                        min={0} step={0.10}
                        onChange={(e) => setNum(+parseFloat(e.target.value).toFixed(2))}>
                    </input>
                </section>
                <button className="transfer"
                    disabled={blockBtns}
                    onClick={(e) => handleSubmit(e)}>Transfer
                </button>
            </form>
            <h3 className="err">{errorMsg}</h3>
        </>
    )
}

export default ToggleDisplay