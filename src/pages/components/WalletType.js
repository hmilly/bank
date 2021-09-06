import React, { useState } from 'react'
import ToggleDisplay from "./ToggleDisplay"
import Transactions from "./Transactions"

function WalletType({ name, balance, transactions, btn1, btn2, updateUser, user, today }) {
    const [details, setDetails] = useState({ state: false, btnName: "" })

    const setBalance = (num) => num === undefined ? "-" : Number(num).toFixed(2)
    console.log(details.state)
    let toggle
    if (details.state) {
        toggle = <ToggleDisplay
            name={name}
            details={details}
            setDetails={setDetails}
            updateUser={updateUser}
            user={user}
        />
    }
    return (
        <>
            <div className="account">
                <div className="accountsData">
                    <div className={`${name}balance`}>
                        <div className="balance">
                            <h1 className="pounds">
                                {setBalance(balance)}
                            </h1>
                        </div>
                        <p className="balanceP">Balance</p>
                    </div>
                    <div className="savingsbuttons">
                        <button className={btn1}
                            onClick={() =>
                                setDetails({
                                    ...details,
                                    state: !details.state,
                                    btnName: "in"
                                })}>
                            {btn1}
                        </button>
                        <button className={btn2}
                            onClick={() =>
                                setDetails({
                                    ...details,
                                    state: !details.state,
                                    btnName: "out"
                                })}>
                            {btn2}
                        </button>
                    </div>
                </div>
                {toggle}
            </div>
            <Transactions trans={transactions} today={today} />
        </>
    )
}

export default WalletType