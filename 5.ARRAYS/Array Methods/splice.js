//splice()

//1.Removing elements from an array:
l1 = [10, 20, 30, 40, 50]
//     0   1   2   3   4
//spilce(start, deleteCount)
console.log(l1.splice(2, 2)) //[ 30, 40 ]
console.log(l1) // [ 10, 20, 50 ]

l1 = [10, 20, 30, 40, 50]
//     0   1   2   3   4
//spilce(start, deleteCount)
console.log(l1.splice(2, 3)) // [ 30, 40, 50 ]
console.log(l1) // [ 10, 20 ]

var fruits = ['apple', 'banana', 'orange', 'grape'];
fruits.splice(1, 2); // Removes 2 elements starting from index 1
console.log(fruits); // Output: ['apple', 'grape']

//2.Adding elements to an array:

l1 = ['a', 'b', 'c', 'd']
//     0    1    2    3
console.log(l1.splice(2, 1, 100, 200, 300, 400))  //[ 'c' ]
console.log(l1) // [ 'a', 'b', 100,200, 300, 400, 'd']

var fruits = ['apple', 'grape'];
fruits.splice(1, 0, 'banana', 'orange'); // Inserts 'banana' and 'orange' at index 1
console.log(fruits); // Output: ['apple', 'banana', 'orange', 'grape']


//3.Replacing elements in an array:

var fruits = ['apple', 'banana', 'orange'];
fruits.splice(1, 1, 'grape', 'kiwi'); // Replaces 1 element at index 1 with 'grape' and 'kiwi'
console.log(fruits); // Output: ['apple', 'grape', 'kiwi', 'orange']
