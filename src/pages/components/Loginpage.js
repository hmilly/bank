import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

const LoginPage = ({ setUser, user, allUsers }) => {
  const history = useHistory();
  const [enteredEmail, setEnteredEmail] = useState("user@gmail.com");
  const [enteredPword, setEnteredPword] = useState("");

  useEffect(() => {
    const u = allUsers.find((match) => match.email === enteredEmail);
    if (u) {
      setUser(u);
    }
  }, [enteredEmail, allUsers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (enteredEmail === "user@gmail.com") {
      history.push("/wallet");
    } else {
      user.email === enteredEmail.toLowerCase() && user.pword === enteredPword
        ? history.push("/wallet")
        : window.alert("Incorrect details - please try again!");
    }
  };

  return (
    <main className="login">
      <section>
        <p></p>
        <p>Login</p>
      </section>
      <form onSubmit={handleSubmit} className="details">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={enteredEmail}
          onChange={(e) => setEnteredEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setEnteredPword(e.target.value)}
        />
        <button>Login</button>
        <span className="signup">
          <Link to="/signup">Sign up</Link>
        </span>
      </form>
    </main>
  );
};

export default LoginPage;
