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
        <p>£{t.plus.toFixed(2)}</p>
      </>
    ) : (
      <>
        <FontAwesomeIcon icon={faMinus} className="minus" />
        <p>£{t.minus.toFixed(2)}</p>
      </>
    );
  };

  return (
    <div className="transactions">
      <header>
        <h4>Transactions</h4>
        <h4>Amount</h4>
      </header>
      <main>
        {transactions ? (
          transactions.map((t, i) => (
            <div key={i}>
              <p>{t.date}</p>
              <p>{whichName(t)}</p>
              <span>{cost(t)}</span>
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
