let map = new WeakMap()

let userNames = {
    'userName':"Sai Kiran"
}

let userAddress = {

    'userAddress':"Hyd"
}

let key1 = {}
let key2 = {}

map.set(key1, userNames)
map.set(key2, userAddress)

console.log(map.get(key1)) //{ userName: 'Sai Kiran' }
console.log(map.get(key2)) //{ userAddress: 'Hyd' }

key1 = null
key2 = null
console.log(map.get(key1)) //undefined
console.log(map.get(key2)) //undefined

