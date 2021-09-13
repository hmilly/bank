import React from 'react'
import man1 from "../img/man_1.png"
import Transactions from "./Transactions"
import { today } from "./fns"

const Wallet = ({ user }) => {
    let balance, pound = 0, pence = 0

    if (user.balance !== undefined) {
        balance = Number(user.balance)
        pound = Math.trunc(balance)
        let bp = (balance - pound).toFixed(2)
        pence = bp.slice(bp.length - 2)
    }

    return (
        <>
            <div className="account">
                <div className="accountsData">
                    <div className="walletbalance">
                        <div className="balance">
                            <h1 className="pounds">{pound}.</h1>
                            <h3 className="pence">{pence}</h3>
                        </div>
                        <p className="balanceP">Balance</p>
                    </div>
                    <div className="userdate">
                        <img src={man1} alt="user profile"></img>
                        <div>
                            <p>{today}</p>
                        </div>
                    </div>
                </div>
            </div>
            {(user.transactions) ? <Transactions transactions={user.transactions} name={"wallet"} /> : <></>}
        </>
    )
}


export default Wallet

