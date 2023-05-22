// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]
let smallNum = array[0]
let largeNum = array[0]

for (let i = 0; i < array.length; i++) {
    if (smallNum > array[i]) {
        smallNum = array[i]
    }
    if (largeNum < array[i]) {
        largeNum = array[i]
    }
} 

console.log(smallNum, largeNum)
// Write your solution below: