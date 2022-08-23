let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date("1995-12-17T00:00:00");
let d = date.getDay();
let day = days[d];

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
if (hour < 12) {
  hour = hour + " AM";
} 
else if (hour===0 && minute===0 && second===0) {
hour="Midnight";
}
else {
  hour = hour-12  + " PM";
}

document.write("Today is : " + day + ".<br> Current Time is : " + hour + " : " + minute + " : " + second + ".");
