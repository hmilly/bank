import React from "react";
import Transactions from "./Transactions";
import { today } from "../fns/fns";

const Wallet = ({ user }) => {
  let balance,
    pound = 0,
    pence = 0;

  if (user.balance !== undefined) {
    balance = Number(user.balance);
    pound = Math.trunc(balance);
    let bp = (balance - pound).toFixed(2);
    pence = bp.slice(bp.length - 2);
  }

  return (
    <>
      <div className="account">
        <div>
          <section className="acc_wallet">
            <h3 className="acc_total">Balance</h3>
            <span className="acc_balance">
              <p className="acc_pounds">{pound}.</p>
              <p className="acc_pence">{pence}</p>
            </span>
          </section>
          <section>
            <p>{today}</p>
            <h3>Account holder:</h3>
            <p>
              {user.firstName} {user.lastName}
            </p>
          </section>
        </div>
      </div>
      {user.transactions ? (
        <Transactions transactions={user.transactions} name={"wallet"} />
      ) : (
        <></>
      )}
    </>
  );
};

export default Wallet;
