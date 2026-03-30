function updateClock() {
let now = new Date();

let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
              "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

let dayname = days[now.getDay()];
let daymonth = months[now.getMonth()];
let datenum = now.getDate();

let fulldate = dayname + "," + daymonth + " " + datenum;

let ampm = hours >= 12? "PM" :"AM";

let displayhours = hours % 12;
displayhours = displayhours === 0 ? 12 : displayhours;

displayhours = displayhours < 10 ? "0" + displayhours : displayhours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

document.getElementById("hours").innerText = displayhours;
document.getElementById("minutes").innerText = minutes;
document.getElementById("seconds").innerText = seconds;
document.getElementById("ampm").innerText = ampm;
document.getElementById("date").innerText = fulldate;

let hCircle = document.getElementById("h");
let mCircle = document.getElementById("m");
let sCircle = document.getElementById("s");

hCircle.style.strokeDashoffset = 377 - (377 * hours) / 24;
mCircle.style.strokeDashoffset = 377 - (377 * minutes) / 60;
sCircle.style.strokeDashoffset = 377 - (377 * seconds) / 60;
}
setInterval(updateClock , 1000);

updateClock();