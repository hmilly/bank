import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Transactions = ({ transactions, name }) => {
  const whichName = (t) => {
    switch (name) {
      case "loans":
        return t.minus ? "Loan taken - Wallet Credited" : "Thanks for payment";
      case "savings":
        return t.minus ? "Debit to Wallet" : "Deposit from Wallet";
      default:
        return t.transName.charAt(0).toUpperCase() + t.transName.slice(1);
    }
  };

  const cost = (t) => {
    return t.plus ? (
      <>
        <FontAwesomeIcon icon={faPlus} className="added" />
        <h5>£{t.plus.toFixed(2)}</h5>
      </>
    ) : (
      <>
        <FontAwesomeIcon icon={faMinus} className="minus" />
        <h5>£{t.minus.toFixed(2)}</h5>
      </>
    );
  };

  return (
    <div className="transactions">
      <header>
        <h2>Transactions</h2>
        <h2>Amount</h2>
      </header>
      <main>
        {transactions ? (
          transactions.map((t, i) => (
            <div className="transaction" key={i}>
              <p className="today">{t.date}</p>
              <h5 className="companyname">{whichName(t)}</h5>
              <div className="paymentinfo">{cost(t)}</div>
            </div>
          ))
        ) : (
          <></>
        )}
      </main>
    </div>
  );
};

export default Transactions;
