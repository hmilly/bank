import React from 'react'
import Transactions from "./Transactions"
import { today } from "../fns/fns"

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
            <div>
                <aside className="acc_wallet">
                     <h3 className="acc_total">Balance</h3>
                    <span className="acc_balance">
                        <h1 className="acc_pounds">{pound}.</h1>
                        <h3 className="acc_pence">{pence}</h3>
                    </span>
                </aside>
                <aside>
                    <h4>{today}</h4>
                    <h1>Account holder:</h1>
                    <h3>{user.firstName} {user.lastName}</h3>
                    
                </aside>
                </div>
            </div>
            {(user.transactions) && <Transactions transactions={user.transactions} name={"wallet"} />}
        </>
    )
}


export default Wallet

