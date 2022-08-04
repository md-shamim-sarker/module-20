/*
Write a program which can convert hour to second.
*/
function hourToSecond(hour) {
    return hour * 3600;
}

let givenHour = 4;
console.log(`${givenHour} Hours = `, hourToSecond(givenHour), 'Seconds.');