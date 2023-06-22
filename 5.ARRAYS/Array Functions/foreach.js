let names = ["NameOne", "NameTwo", "NameThree", "NameFour"]
//              0          1             2           3
console.log(names)

let l1 = names.forEach(function(values) {
    console.log("1st Way: ", values)
})

let l2 = names.forEach(function(values, index) {
    console.log("2nd Way: ", values, index)
})

let l3 = names.forEach(function(values, index, array) {
    console.log("2nd Way: ", values, index, array)
})