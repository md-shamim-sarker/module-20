/*
Write a function named leapYear() which return true if leap year otherwise return false. Check the year 2023.
*/
/*
Algorithm:

if year is divisible by 400 then
   is_leap_year
else if year is divisible by 100 then
   not_leap_year
else if year is divisible by 4 then
   is_leap_year
else
   not_leap_year
*/

function leapYear(year) {

    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

let givenYear = 2023;
let result = leapYear(givenYear);
console.log('Is', givenYear, 'leap year?', result)