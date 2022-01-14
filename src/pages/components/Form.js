import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { setNewUser, updateUser } from "../fns/fns";
import "../styles/form.scss"

const Form = ({ user, setUser, allUsers = [], setAllUsers, btnName }) => {
  const [userInfo, setUserInfo] = useState({});
  let history = useHistory();

  const addUser = (u) => {
    if (u === undefined ) {
      window.alert(`Hello ${userInfo.firstName}, please go back and login`);
    } else if (!u) {
      const obj = Object.fromEntries(Object.entries(userInfo).slice(0, 5));
      setNewUser(obj, allUsers, setAllUsers);
      history.push("/bank");
    } else {
      window.alert(
        "Email entered is currently in use, please re-enter and try again"
      );
    }
  };

  const modifyUser = (u) => {
    if (u === undefined) {
        window.alert(`Thanks ${userInfo.firstName}, for trying this website`);
    } else {
      setUser({
        ...user,
        id: u.id,
        firstName: userInfo.firstName,
        lastName: userInfo.lastName,
        pword: u.pword,
      });
      updateUser(user);
      window.alert(
        `User updated, thanks ${userInfo.firstName} ${userInfo.lastName}`
      );
    }
  };

  const handleChange = (e) => {
    console.log(userInfo);
    const name = e.target.name;
    const v = e.target.value;
    setUserInfo({ ...userInfo, id: parseInt(allUsers.length) + 1, [name]: v });
  };

  const handleSubmit = (e, btnName) => {
    e.preventDefault();
    const data = Object.values(userInfo);
    if (data.length < 6 || data.some((o) => o === "")) {
      window.alert("You left some fields blank please try again");
    } else if (userInfo.pword !== userInfo.pwordmatch) {
      window.alert("You passwords do not match please try again");
    } else if (data.length === 6 && data.every((o) => o !== "")) {
      const u = allUsers.find(
        (u) => u.email.toLowerCase() === userInfo.email.toLowerCase()
      );
      btnName === "Save" ? modifyUser(u) : addUser(u);
    }
  };

  return (
    <form className="details">
      <label htmlFor="firstName">First name</label>
      <input
        type="text"
        name="firstName"
        required
        onChange={(e) => handleChange(e)}
      ></input>
      <label htmlFor="lastName">Last name</label>
      <input
        type="text"
        name="lastName"
        required
        onChange={(e) => handleChange(e)}
      ></input>
      <label htmlFor="email">
        {btnName === "Save" ? `Email (for user varification only)` : `Email`}
      </label>
      <input
        type="email"
        name="email"
        required
        onChange={(e) => handleChange(e)}
      ></input>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="pword"
        required
        onChange={(e) => handleChange(e)}
      ></input>
      <label htmlFor="password">Confirm Password</label>
      <input
        type="password"
        name="pwordmatch"
        required
        onChange={(e) => handleChange(e)}
      ></input>
      <button className="su-login" onClick={(e) => handleSubmit(e, btnName)}>
        {btnName}
      </button>
    </form>
  );
};

export default Form;
