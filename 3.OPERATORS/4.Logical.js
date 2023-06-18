//Logical Operators
//&& Logical AND (both conditions must satisfy)
console.log(true && true)
console.log(false && false)
console.log(true && false)
console.log(false && true)

//|| Logical OR (any one condition must satisfy)
console.log(true || true)
console.log(false || false)
console.log(true || false)
console.log(false || true)

a = 10
b = 20
console.log(a && b) // 20

a = 10
b = 20
console.log(a || b) // 10


//Logical NOT (!)
//The ! operator negates the Boolean value of its operand. If the operand is true, ! returns false, and if the operand is false, ! returns true.

let a = true;
console.log(!a);  // Output: false