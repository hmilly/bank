import React, { useState, useEffect } from 'react'
import ToggleDisplay from "./ToggleDisplay"
import Transactions from "./Transactions"

const WalletType = ({ divColour, user, updateUser, balance, transactions, btn1, btn2 }) => {
    const [details, setDetails] = useState({ state: false, type: "" })


    useEffect(() => {
       const setBalance = (num) => num === undefined ? "-" : Number(num).toFixed(2) 
       setBalance(balance)
    },[balance])
    

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
                            onClick={() => setDetails({
                                ...details,
                                state: !details.state, type: "in"
                            })}>
                            {btn1}
                        </button>
                        <button className={btn2}
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
                        updateUser={updateUser}
                        bal={balance}
                        transactions={transactions}
                    /> : <></>}
            </div>
            <Transactions transactions={transactions} from={divColour} type={details.type}/>
        </>
    )
}

export default WalletType