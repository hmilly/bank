import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Form from "./Form";
import { today, updateUser } from "../fns/fns";

const Settings = ({
  setMenu,
  user,
  setUser,
  allUsers,
  setAllUsers,
  blockBtns,
  setBlockBtns,
}) => {
  const [rounded, setRounded] = useState(false);
  useEffect(() => {
    user.balance % 1 === 0 ? setRounded(true) : setRounded(false);
  }, [user]);

  const round = () => {
    let remainder = +(user.balance % 1).toFixed(2);
    if (remainder > 0) {
      setUser({
        ...user,
        balance: (user.balance -= remainder),
        savingsBal: (user.savingsBal += remainder),
        transactions: [
          ...user.transactions,
          { transName: "savings", minus: remainder, date: today },
        ],
        savingsTran: [
          ...user.savingsTran,
          { transName: "savings", plus: remainder, date: today },
        ],
      });
      updateUser(user);
    }
  };

  return (
    <aside className="settings">
      <div className="title">
        <button onClick={() => setMenu(false)}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h2>Settings</h2>
      </div>
      <div className="block">
        <p>Block account</p>
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setBlockBtns(!blockBtns)}
          ></input>
          <span className="slider"></span>
        </label>
      </div>
      <div className="rounds">
        <p>Round up wallet into Savings</p>
        <label className="switch">
          <input type="checkbox" onChange={() => round()} checked={rounded} />
          <span className="slider round" disabled={rounded}></span>
        </label>
      </div>
      <h3>User</h3>
      <Form
        user={user}
        setUser={setUser}
        allUsers={allUsers}
        setAllUsers={setAllUsers}
        btnName={"Save"}
      />
    </aside>
  );
};

export default Settings;
