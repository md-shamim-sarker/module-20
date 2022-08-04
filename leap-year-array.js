/*
Write a function findLeapYear() that will take the array [2023, 2024, 2025, 2028, 2030] as the input parameter and will check if each year is a leap year. If a year is a leap year insert that year in a new array, return the new array and print the result.
*/

function findLeapYear(arr) {
    const leapYearArray = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 4 === 0) {
            leapYearArray.push(arr[i]);
        }
    }

    return leapYearArray;
}

let givenArray = [2023, 2024, 2025, 2028, 2030];
let resultLeapYearArray = findLeapYear(givenArray);

for (let i = 0; i < resultLeapYearArray.length; i++) {
    const element = resultLeapYearArray[i];
    console.log(element);
}