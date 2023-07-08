let set = new WeakSet()

let userNames = {
    'userName':"Sai Kiran"
}

let userAddress = {

    'userAddress':"Hyd"
}

let key1 = {}
let key2 = {}

set.add(userNames)
set.add(userAddress)
console.log(set) //WeakSet { <items unknown> }

console.log(set.has(userNames)) //true
console.log(set.has(key1)) //false

userNames = null
userAddress = null
console.log(set.has(userNames)) //false