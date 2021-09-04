import React, { useState } from 'react'
import ToggleDisplay from "./ToggleDisplay"
import Transactions from "./Transactions"

function WalletType({ name, updateUser, user, today }) {
    const [details, setDetails] = useState(
        { state: false, btnName: "" }
    )

    const balance = (num) => num === undefined ? "-" : Number(num).toFixed(2)  
    
    return (
        <>
            <div className="account">
                <div className="accountsData">
                    <div className={`${name}balance`}>
                        <div className="balance">
                            <h1 className="pounds">
                                {name === "savings" ? balance(user.savingsBal) : balance(user.loansBal)}
                            </h1>
                        </div>
                        <p className="balanceP">Balance</p>
                    </div>
                    <div className="savingsbuttons">
                        <button className={name === "savings" ? "in" : "in takeout"}
                            onClick={() =>
                                setDetails({
                                    ...details,
                                    state: !details.state,
                                    btnName: "in"
                                })}>
                            {name === "savings" ? "PAY IN" : "TAKE LOAN"}
                        </button>
                        <button className={name === "savings" ? "out" : "out takeout"}
                            onClick={() =>
                                setDetails({
                                    ...details,
                                    state: !details.state,
                                    btnName: "out"
                                })}>
                            {name === "savings" ? "PAY OUT" : "PAY BACK"}
                        </button>
                    </div>

                </div>
                {!details.state
                    ? <></>
                    : <ToggleDisplay
                        name={name}
                        details={details}
                        setDetails={setDetails}
                        updateUser={updateUser}
                        user={user}
                        onClick={setDetails({...details, state: false})}
                    />
                }
            </div>

            {name === "savings"
                ? <Transactions trans={user.savingTran} today={today} />
                : <Transactions trans={user.loansTran} today={today} />}
        </>
    )
}

export default WalletType