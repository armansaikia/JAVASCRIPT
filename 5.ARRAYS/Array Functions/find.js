//find 
arrayOne = [10, 20, 30, 40, 50]
//           0   1   2   3   4 

function checkValue(value){
    return value > 40
}

//arrayRef.find(function)
console.log(arrayOne.find(checkValue))

//findIndex
arrayOne = [10, 20, 30, 40, 50]
//           0   1   2   3   4 

function findIndexPosotion(element){
    return element > 40
}

//arrayRef.findIndex(function)
console.log(arrayOne.findIndex(findIndexPosotion))