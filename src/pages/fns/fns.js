const todayObj = new Date();
let day = todayObj.getDate();
let month = todayObj.getMonth() + 1;
const year = todayObj.getFullYear();
if (day < 10) { day = `0${day}` }
if (month < 10) { month = `0${month}` }
export const today = `${day}/${month}/${year}`;

export const setNewUser = async (userDetails, allUsers, setAllUsers) => {
    const u = {
        ...userDetails,
        "balance": 100,
        "savingsBal": 0,
        "loansBal": 0,
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
    await fetch("http://localhost:8080/users", configObject)
        .then((res) => (res.ok ? res.json() : console.log("Oops we couldn't update that!")))
        .then(res => setAllUsers([...allUsers, u]))
        .catch((error) => console.log(error));
};

export const updateUser = async (editedUser) => {
    const configObject = {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(editedUser),
    };
    await fetch(`http://localhost:8080/users/${editedUser.id}`, configObject)
        .then((res) => (res.ok ? res.json() : console.log("Oops we couldn't update that!")))
        .catch((error) => console.log(error, configObject));
};



