/*
Write a function which return true if your age an even number otherwise return false.
*/

function isEven(age) {
    if (age % 2 === 0) {
        return true;
    } else
        return false;
}

let myAge = 15;
console.log('Is your age even number? Ans: ', isEven(myAge))