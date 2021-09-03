import React, { useState } from 'react'
import man1 from "../img/man_1.png"

function WalletType({ name, updateUser, user, today, ToggleDisplay, Transactions }) {


    const [transfer, setTransfer] = useState(
        { state: false, btnName: "", compName: "savings" }
    )

    const setBal = (num) =>
        num === undefined ? "-" : Number(num).toFixed(2)

    return (
        <>
            <div className="account">
                <div className="accountsData">
                    <div className={`${name}balance`}>
                        <div className="balance">
                            <h1 className="pounds">
                                {name === "savings" ? setBal(user.savingsBal) : setBal(user.loansBal)}
                            </h1>
                        </div>
                        <p className="balanceP">Balance</p>
                    </div>
                    <div className="savingsbuttons">
                        <button className={name === "savings" ? "in" : "in takeout"}
                            onClick={() =>
                                setTransfer({
                                    ...transfer,
                                    state: !transfer.state,
                                    btnName: "in"
                                })}>
                            {name === "savings" ? "PAY IN" : "TAKE LOAN"}
                        </button>
                        <button className={name === "savings" ? "out" : "out takeout"}
                            onClick={() =>
                                setTransfer({
                                    ...transfer,
                                    state: !transfer.state,
                                    btnName: "out"
                                })}>
                            {name === "savings" ? "PAY OUT" : "PAY BACK"}
                        </button>
                    </div>

                </div>
                {!transfer.state
                    ? <></>
                    : <ToggleDisplay
                        transfer={transfer}
                        setUserInput={setTransfer}
                        updateUser={updateUser}
                        user={user}
                        onClick={() => setTransfer(true)}
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