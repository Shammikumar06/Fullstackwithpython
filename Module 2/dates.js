var currentDT=new Date();
console.log(currentDT);
var currentTimeUnix = currentDT.getTime();
var currentFullYr = currentDT.getFullYear();
var currentDay = currentDT.getDay();
var currentmonth = currentDT.getMonth();
var currentDataString = currentDT.toDateString();
var milliseconds = currentDT.getMilliseconds();
var timezone = currentDT.getTimezoneOffset();
var utcDate = currentDT.getUTCDate();
var locale = currentDT.toLocaleString();

console.log(milliseconds);
console.log(timezone);
console.log(utcDate);
console.log(locale);


//0,1,2,3,4,,5,6
//S,M,T,W,T,F,S
