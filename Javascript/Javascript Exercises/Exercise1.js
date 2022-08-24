/*Javascript Basics exercise 1
JavaScript Basic: Exercise-1 with Solution
Write a JavaScript program to display the current day and time in the following format.
Today is : Tuesday.
Current time is : 10 PM : 30 : 38*/

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let date = new Date();
let d = date.getDay();
let day = days[d];

let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
 let time = hour + " : " + minute + " : " + second;
if (hour < 12) {
    time = hour + " AM : " + minute + " : " + second;
  } else {
    time = hour - 12 + " PM : " + minute + " : " + second;
  }
if (hour === 0 && minute === 0 && second === 0) {
  time = "Midnight";
} else if (hour === 12 && minute === 0 && second === 0) {
  time = "Midday";
  }
  
  console.log("Today is : " + day + ". Current Time is : " + time);