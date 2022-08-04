/*
Write a function which can convert hour to minute.
*/
function hourToMinute(hour, minute = 0) {
    return hour * 60 + minute;
}

let givenHour = 1;
let givenMinute = 25;
console.log('Total minutes are: ', hourToMinute(givenHour, givenMinute));