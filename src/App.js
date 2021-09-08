import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import "./pages/styles/App.css";
import "./pages/styles/headers.css";
import "./pages/styles/login.css";
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

	const updateUser = (user) => setUser(user)

	useEffect(() => {
		const getUsers = () =>
			fetch('http://localhost:8080/users')
				.then(res => res.json())
				.then(res => setAllUsers(res))
				.catch((error) => console.log(error));
		getUsers()
	}, [user])

	const newUser = async (userDetails) => {
		const u = {
			...userDetails,
			"balance": 10,
			"savingsBal": 0,
			"loansBal": -0,
			"transactions": [],
			"savingTran": [],
			"loansTran": []
		}
		const configObject = await {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(u),
		};
		await fetch(`http://localhost:8080/users`, configObject)
			.then((res) => (res.ok ? res.json() : "Oops we couldn't update that!"))
			.then(res => setAllUsers([...allUsers, u]))
			.catch((error) => console.log(error));
	};
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" >
					<Loginheader />
					<LoginPage updateUser={updateUser} user={user} allUsers={allUsers} />
				</Route>
				<Route path="/signup">
					<Loginheader />
					<Signup updateUser={updateUser} user={user} newUser={newUser} allUsers={allUsers} />
				</Route>
				<Route path="/wallet">
					<Mainheader user={user}/>
					<Wallet
						updateUser={updateUser}
						user={user}
					/>
				</Route>
				<Route path="/savings">
					<Mainheader user={user}/>
					<WalletType
						divColour={"saving"}
						user={user}
						updateUser={updateUser}
						balance={user.savingsBal}
						transactions={user.savingsTran}
						btn1={"PAY IN"}
						btn2={"PAY OUT"}
					/>
				</Route>
				<Route path="/loans">
					<Mainheader user={user} />
					<WalletType
						divColour={"loan"}
						user={user}
						updateUser={updateUser}
						balance={user.loansBal}
						transactions={user.loansTran}
						btn1={"PAY BACK"}
						btn2={"TAKE LOAN"}
					/>
				</Route>
			</Switch>
		</div>
	)
}

export default App;