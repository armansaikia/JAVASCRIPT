var v = document.getElementsByClassName("List1")

v[0].textContent = "VIVO"
v[1].textContent = "APPLE"
v[2].textContent = "SAMSUNG"
v[3].textContent = "OPPO"
v[4].textContent = "LG"

console.log(v[0])
console.log(v[1])
console.log(v[2])
console.log(v[3])
console.log(v[4])


v[0].style.backgroundColor = "red"
v[1].style.fontSize = "50px"
v[4].style.fontFamily = "sans-serif"


//using for loop we can change the whole content together----------->

for(var i = 0; i < v.length; i++){
    v[i].style.fontSize = "40px"
}