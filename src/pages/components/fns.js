const todayObj = new Date();
let day = todayObj.getDate();
let month = todayObj.getMonth() + 1;
const year = todayObj.getFullYear();
if (day < 10) { day = `0${day}` }
if (month < 10) { month = `0${month}` }
const today = `${day}/${month}/${year}`;

const setNewUser = async (userDetails, allUsers, setAllUsers) => {
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

const updateUser = async (userDetails, allUsers, setAllUsers) => {
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
        method: "PATCH",
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

module.exports = {
    today,
    setNewUser,
    updateUser
}