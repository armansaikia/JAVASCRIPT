//splice()
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

l1 = ['a', 'b', 'c', 'd']
//     0    1    2    3
console.log(l1.splice(2, 1, 100, 200, 300, 400))  //[ 'c' ]
console.log(l1) // [ 'a', 'b', 100,200, 300, 400, 'd']