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

//1.The value 10 is assigned to the variable a.
//2.The value 2 is assigned to the variable b.
//3.The expression a >> b is evaluated using the right shift operator.
//4.The binary representation of 10 is 1010.
//5.The right shift operation moves the binary representation of 10 two positions to the right, resulting in 10.
//6.The binary representation 10 is equivalent to the decimal value 2.
//7.The result of the expression a >> b is 2.
//8.The console.log(a >> b) statement outputs 2 to the console.

a = 10
b = 2
console.log(a >> b) //2 
