 l1 = [10, 20, 30, 40, 50, 60, 70, 80]
// //   0   1   2   3   4   5   6   7
//console.log(l1)  [10, 20, 30, 40,50, 60, 70, 80]

// // slice(start, end)
console.log(l1.slice(2)) //[30, 40, 50, 60, 70, 80 ]
console.log(l1.slice(4)) //[ 50, 60, 70, 80 ]
 console.log(l1.slice(1)) //[20, 30, 40, 50,60, 70, 80]
 console.log(l1.slice(0)) //[10, 20, 30, 40,50, 60, 70, 80]



 const fruits = ['apple', 'banana', 'cherry', 'orange', 'mango'];
 const slicedFruits = fruits.slice(1, 4); // Extracts elements from index 1 to 3 (exclusive)
 console.log(slicedFruits); // Output: ['banana', 'cherry', 'orange']



 const colors = ['red', 'green', 'blue', 'yellow'];
const slicedColors = colors.slice(1,2); // Creates a shallow copy of the original array
console.log(slicedColors); // Output: ['red', 'green', 'blue', 'yellow']