const todayObj = new Date();
let day = todayObj.getDate();
let month = todayObj.getMonth() + 1;
const year = todayObj.getFullYear();
if (day < 10) { day = `0${day}` }
if (month < 10) { month = `0${month}` }
const today = `${day}/${month}/${year}`;




module.exports = {
    today
}