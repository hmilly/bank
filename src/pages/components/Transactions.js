import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { today } from "./fns"

const Transactions = ({ transactions}) => {
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
                            {t.minus ? "Paid out" : "Paid in"}
                            <p className="today">{today}</p>
                        </h5>
                        <div className="paymentinfo">
                            {(t.minus)
                                ? <><FontAwesomeIcon
                                    icon={faMinus}
                                    className="minus" />
                                    <h5>£{t.minus.toFixed(2)}</h5></>
                                : <><FontAwesomeIcon
                                    icon={faPlus}
                                    className="added" />
                                    <h5>£{t.plus.toFixed(2)}</h5></>}
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Transactions