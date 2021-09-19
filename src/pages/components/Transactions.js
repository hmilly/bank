import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"

const Transactions = ({ transactions, name }) => {
    const whichName = (t) => {
        switch (name) {
            case 'loans':
                return t.minus ? "Loan taken - Wallet Credited" : "Thanks for payment";
            case 'savings':
                return t.minus ? "Debit to Wallet" : "Deposit from Wallet";
            default:
                return t.transName.charAt(0).toUpperCase() + t.transName.slice(1);
        }
    }

    return (
        <div className="transactions_main">
            <div className="tran_header">
                <p className="tran_txt">Transactions</p>
                <p className="tran_amount">Amount</p>
            </div>
            <div className="transactions">
                {transactions.map((t, i) => (
                    <div className="transaction" key={i}>
                        <h5 className="companyname">
                            <p className="today">{t.date}</p>
                            {whichName(t)}
                        </h5>
                        <div className="paymentinfo">
                            {(t.minus)
                                ? <><FontAwesomeIcon
                                    icon={faMinus}
                                    className="minus" />
                                    <h5>£{(t.minus).toFixed(2)}</h5></>
                                : <><FontAwesomeIcon
                                    icon={faPlus}
                                    className="added" />
                                    <h5>£{(t.plus).toFixed(2)}</h5></>}
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Transactions