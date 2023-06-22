//filter()   
//The filter() method is commonly used when you need to extract a subset of elements from an array based on a specific condition.



arrayOne = [10, 20, 30, 40, 50]
//           0   1   2   3   4 

//function outside the filter
function f1(value){
    return value > 20
}

console.log(arrayOne.filter(f1))

//function inside the filter

let l1 = arrayOne.filter(function(value){    //syntax- array.filter(callback(element, index, array));

    return value > 20
})
console.log(l1)
console.log(typeof(l1))