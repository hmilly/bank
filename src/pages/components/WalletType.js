import React, { useState, useEffect } from 'react'
import ToggleDisplay from "./ToggleDisplay"
import Transactions from "./Transactions"

const WalletType = ({ divColour, user, setUser, balance, transactions, btn1, btn2, blockBtns }) => {
    const [details, setDetails] = useState({ state: false, type: "" })

    useEffect(() => {
        const setBalance = (num) =>
            num === undefined ? "-" : +parseFloat(num).toFixed(2) 
        setBalance(balance)
    }, [balance])

    return (
        <>
            <div className="account">
                <div className="accountsData">
                    <div className={divColour}>
                        <div className="balance">
                            <h1 className="pounds">{balance}</h1>
                        </div>
                        <p className="balanceP">Balance</p>
                    </div>
                    <div className="savingsbuttons">
                        <button className={btn1}
                            disabled={blockBtns}
                            onClick={() => setDetails({
                                ...details,
                                state: !details.state, type: "in"
                            })}>
                            {btn1}
                        </button>
                        <button className={btn2}
                            disabled={blockBtns}
                            onClick={() =>
                                setDetails({
                                    ...details,
                                    state: !details.state, type: "out"
                                })}>
                            {btn2}
                        </button>
                    </div>
                </div>
                {details.state
                    ? <ToggleDisplay
                        name={divColour}
                        details={details}
                        user={user}
                        setDetails={setDetails}
                        setUser={setUser}
                        bal={balance}
                        transactions={transactions}
                        blockBtns={blockBtns}
                    /> : <></>}
            </div>
            <Transactions transactions={transactions} name={divColour} />
        </>
    )
}

export default WalletType