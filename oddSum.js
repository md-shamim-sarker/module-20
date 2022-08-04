/*
Write a function findOddSum() that will take the array [5, 7, 8, 10, 45, 30] as the input parameter and will return the sum of the odd numbers.
*/

function findOddSum(arr) {
    const oddArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            oddArray.push(arr[i]);
        }
    }

    let oddArraySum = 0;
    for (let i = 0; i < oddArray.length; i++) {
        oddArraySum += oddArray[i];
    }

    return oddArraySum;
}

const givenArray = [5, 7, 8, 10, 45, 30, 5, 3];
console.log('The sum of odd numbers is: ', findOddSum(givenArray));