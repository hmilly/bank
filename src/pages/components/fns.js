const todayObj = new Date();
let day = todayObj.getDate();
let month = todayObj.getMonth() + 1;
const year = todayObj.getFullYear();
if (day < 10) { day = `0${day}` }
if (month < 10) { month = `0${month}` }
const today = `${day}/${month}/${year}`;

const block = (user) => {

}
const round = (e, user) => {
    e.preventDefault()
    let remainder = +(user.savingsBal % 1).toFixed(2)
    user.balance += remainder
    user.savingsBal -= remainder
    console.log(remainder, user.balance, user.savingsBal)
}


module.exports = {
    today,
    block,
    round
}