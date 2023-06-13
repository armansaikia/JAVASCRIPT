var a = 10
var b = 10
c = (a++ != b || a++ !=b)
console.log(c) // true
console.log(a) // 12
console.log(b) // 10

//1.a is initially assigned the value 10, and b is also assigned the value 10.
//2.In the expression (a++ != b || a++ != b), the first a++ != b evaluates to false because both a and b are 10, so the first part of the OR condition is false.
//3.Due to short-circuiting, the second part of the OR condition (a++ != b) is not evaluated because the first part is already false.
//4.The value of c is false.
//5.The value of a is incremented twice due to the post-increment operator, so it becomes 12.
//6.The value of b remains 10.





var a = 10
var b = 20
var c = (a++ != b | a++ == 10) 
console.log(c) // 1
console.log(a) // 12
console.log(b) // 20

//a is initially assigned the value 10, and b is assigned the value 20.
//In the expression (a++ != b | a++ == 10), the first a++ != b evaluates to true because a is 10 and b is 20, so the first part of the OR condition is true.
//Since the first part of the OR condition is true, the second part (a++ == 10) is not evaluated due to short-circuiting.
//The value of c is 1, which represents true in JavaScript for bitwise OR operations.
//The value of a is incremented twice due to the post-increment operator, so it becomes 12.
//The value of b remains 20.