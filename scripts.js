const daysofweek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayindex = (new Date()).getDay();
const day = daysofweek[dayindex];

document.querySelector("header p").textContent=`Happy ${day}!`;