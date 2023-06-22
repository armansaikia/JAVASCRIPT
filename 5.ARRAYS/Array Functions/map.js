//map()  extracting a specific property from objects in an array:


arrayOne = [10, 20, 30, 40, 50]
//           0   1   2   3   4 

//function outside the filter
function f1(value){
    return value * 2
}

console.log(arrayOne.map(f1))

//function inside the filter
let l1 = arrayOne.map(function(value){
    return value * 2
})
console.log(l1)
console.log(typeof(l1))


  // Example 

  let numbers = [1, 2, 3, 4, 5];

  let squaredNumbers = numbers.map(function(value){
    return value ** 2;
  });
  
console.log(squaredNumbers);  // Outputs: [1, 4, 9, 16, 25] squares of the numbers



//Here's an example that demonstrates extracting a specific property from objects in an array:

let users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];
  
  let userNames = users.map((user) => user.name);
  
  console.log(userNames);  // Outputs: ["Alice", "Bob", "Charlie"]




  