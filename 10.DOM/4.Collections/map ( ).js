let map = new Map([["NameOne", "Sai Kiran"], ["NameTwo", "Sai Kuamr"], ["NameThree", "Sai Ram"]]) // constructor + [key values and pairs]
console.log(map)
// Map(3) {
//     'NameOne' => 'Sai Kiran',
//     'NameTwo' => 'Sai Kuamr',
//     'NameThree' => 'Sai Ram'
//   }

console.log(map.keys()) //[Map Iterator] { 'NameOne', 'NameTwo', 'NameThree' }

console.log(map.values()) //[Map Iterator] { 'Sai Kiran', 'Sai Kuamr', 'Sai Ram' }

console.log(map.entries())

// [Map Entries] {
//     [ 'NameOne', 'Sai Kiran' ],
//     [ 'NameTwo', 'Sai Kuamr' ],
//     [ 'NameThree', 'Sai Ram' ]
//   }

map.set("NameFour", "Sai Vamsi")
console.log(map)

// Map(4) {
//     'NameOne' => 'Sai Kiran',
//     'NameTwo' => 'Sai Kuamr',
//     'NameThree' => 'Sai Ram',
//     'NameFour' => 'Sai Vamsi'
//   }