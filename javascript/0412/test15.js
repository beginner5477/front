'use strict';
let str = "";
const today = new Date();
const year = today.getFullYear();
str += "오늘의 연도는 " + year +"<br/>";
const month = today.getMonth();
str += "오늘의 월은 " + month +"<br/>";
const date = today.getDate();
str += "오늘의 일은 " + date +"<br/>";
const hour = today.getHours();
str += "현재 시는 " + hour +"<br/>";
const minute = today.getMinutes();
str += "현재 분은 " + minute +"<br/>";
const sec = today.getSeconds();
str += "현재 초는 " + sec +"<br/>";
const yymmdd = year + "-" + month + "-" + date + " "
+ hour + ":" + minute + ":" + sec;
str += "오늘 날짜와 시간 " + yymmdd + "<hr/>";

let weekStr = ['일','월','화','수','목','금','토'];
let weekDay = today.getDay();   //요일
str += "오늘의 요일은 " + weekStr[weekDay] + "<br/>";

let lastDate = new Date(2024,4,0);
str += "이번달의 마지막 일자는? "+ lastDate.getDate();

console.log(typeof(str));
console.log(str);

document.getElementById("demo").innerHTML = str;