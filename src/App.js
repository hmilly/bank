import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./pages/styles/App.scss";
import "./pages/styles/wallet.scss";
// json-server --watch db.json --port 8080
import Mainheader from "./pages/components/Mainheader";
import Loginheader from "./pages/components/Loginheader";
import LoginPage from "./pages/components/Loginpage";
import Signup from "./pages/components/Signup";
import Wallet from "./pages/components/Wallet";
import WalletType from "./pages/components/WalletType";

const App = () => {
  const [user, setUser] = useState({
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
  const [allUsers, setAllUsers] = useState([]);
  const [blockBtns, setBlockBtns] = useState(false);

  useEffect(() => {
    const getUsers = () =>
      fetch("http://localhost:8080/users")
        .then((res) => res.json())
        .then((res) => setAllUsers(res))
        .catch((error) => console.log(error));
    getUsers();
  }, [user]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/bank">
          <Loginheader />
          <LoginPage setUser={setUser} user={user} allUsers={allUsers} />
        </Route>
        <Route path="/signup">
          <Loginheader />
          <Signup user={user} setUser={setUser} allUsers={allUsers} />
        </Route>
        <Route path="/wallet">
          <Mainheader
            user={user}
            setUser={setUser}
            blockBtns={blockBtns}
            setBlockBtns={setBlockBtns}
            allUsers={allUsers}
            setAllUsers={setAllUsers}
          />
          <Wallet user={user} />
        </Route>
        <Route path="/savings">
          <Mainheader
            user={user}
            setUser={setUser}
            blockBtns={blockBtns}
            setBlockBtns={setBlockBtns}
            allUsers={allUsers}
            setAllUsers={setAllUsers}
          />
          <WalletType
            divColour={"savings"}
            user={user}
            setUser={setUser}
            balance={user.savingsBal}
            transactions={user.savingsTran}
            btn1={"PAY IN"}
            btn2={"PAY OUT"}
            blockBtns={blockBtns}
          />
        </Route>
        <Route path="/loans">
          <Mainheader
            user={user}
            setUser={setUser}
            blockBtns={blockBtns}
            setBlockBtns={setBlockBtns}
            allUsers={allUsers}
            setAllUsers={setAllUsers}
          />
          <WalletType
            divColour={"loans"}
            user={user}
            setUser={setUser}
            balance={user.loansBal}
            transactions={user.loansTran}
            btn1={"PAY BACK"}
            btn2={"TAKE LOAN"}
            blockBtns={blockBtns}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
