import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./pages/styles/App.css";
import "./pages/styles/headers.css";
import "./pages/styles/login.css";
import "./pages/styles/settings.css";
import "./pages/styles/transactions.css";
import "./pages/styles/wallet.css";
// json-server --watch db.json --port 8080
import Mainheader from "./pages/components/Mainheader"
import Loginheader from "./pages/components/Loginheader"
import LoginPage from "./pages/components/Loginpage"
import Signup from "./pages/components/Signup";
import Wallet from "./pages/components/Wallet";
import WalletType from "./pages/components/WalletType";

const App = () => {
	const [user, setUser] = useState({})
	const [allUsers, setAllUsers] = useState([])
	const [blockBtns, setBlockBtns] = useState(false)

	useEffect(() => {
		const getUsers = () =>
			fetch('http://localhost:8080/users')
				.then(res => res.json())
				.then(res => setAllUsers(res))
				.catch((error) => console.log(error));
		getUsers()
	}, [user])

	return (
		<div className="App">
			<Switch>
				<Route exact path="/" >
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
	)
}

export default App;