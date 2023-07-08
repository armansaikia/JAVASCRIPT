let names = new Set() // calling some set constructor
names.add("NameOne")
names.add("NameTwo")
names.add("NameThree")
names.add("NameFour")
names.add("NameFive")
console.log(names) //Set(5) { 'NameOne', 'NameTwo', 'NameThree', 'NameFour', 'NameFive' }
console.log(names.size) // 5


// add()
names.add("NameOne")
console.log(names) 


// has()-----> methods returns true if exist else false
console.log(names.has("NameOne")) //true
console.log(names.has("NameSix")) //false


// delete()
console.log(names.delete("NameOne")) //true
console.log(names) //Set(4) { 'NameTwo', 'NameThree', 'NameFour', 'NameFive' }
console.log(names.size) //4


// clear()
names.clear()
console.log(names) //Set(0) {}