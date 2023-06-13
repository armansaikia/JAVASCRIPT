//Bitwise Operators
//&& both conditions must satisfy
console.log(true & true) // 1
console.log(false & false) // 0
console.log(true & false) // 0
console.log(false & true) // 0
 
//|| any one condition must satisfy
console.log(true | true) // 1
console.log(false | false) // 0
console.log(true | false) // 1
console.log(false | true) // 1

a = 10
b = 2
console.log(a & b) // 2

a = 10
b = 2
console.log(a | b) // 10

//<< >> right shift and left shift
a = 10
b = 2
console.log(a << b) // 40 

a = 10
b = 2
console.log(a >> b) //2 
