//fill()
l1 = ['NameOne', 'NameTwo', 'NameThree', 'NameFour']
console.log(l1) // [ 'NameOne', 'NameTwo', 'NameThree', 'NameFour' ]
console.log(l1.fill(10)) // [ 10, 10, 10, 10 ]


const colors = ['red', 'green', 'blue'];
colors.fill('white', 1); // Fills from index 1 onwards with 'white'
console.log(colors); // Output: ['red', 'white', 'white']