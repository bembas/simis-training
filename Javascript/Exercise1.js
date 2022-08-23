let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let d = new Date().getDay();
let day = days[d];

let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();
let hour2= hour - 12 ;
if (hour < 12)  {
  hour = new Date().getHours() + " AM";
} 
else (hour > 12) ; {
  hour = hour2 + " PM";
}

let x="Today is : " + day + ". Current Time is : " + hour + " : " + minute + " : " + second + ".";
console.log(x);