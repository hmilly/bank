import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

const LoginPage = ({ setUser, user, allUsers }) => {
  const history = useHistory();
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPword, setEnteredPword] = useState("");

  useEffect(() => {
    const u = allUsers.find((match) => match.email === enteredEmail);
    if (!u && enteredEmail === "user@gmail.com") {
      setUser({
        id: 1,
        firstName: "Rosa",
        lastName: "Linda",
        email: "rl@gmail.com",
        pword: "rosa",
        balance: 300,
        savingsBal: 50.25,
        loansBal: 45,
        transactions: [
          {
            transName: "Marks and Spencers",
            minus: 5.1,
            date: "01.12.2020",
          },
          {
            transName: "Aldi",
            minus: 20.5,
            date: "12.12.2020",
          },
          {
            transName: "savings",
            plus: 0.7,
            date: "11/11/2021",
          },
        ],
        savingsTran: [
          {
            transName: "savings",
            minus: 6.5,
            date: "19.12.2020",
          },
        ],
        loansTran: [
          {
            transName: "loans",
            minus: 100,
            date: "08/11/2021",
          },
        ],
      });
    } else if (u) {
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
