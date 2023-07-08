var a=document.getElementById("id1")
a.textContent = "WELCOME TO DOM"
console.log(a)

//also we can use another method---------------->

//2nd method

a.innerText = "WELCOME TO DOMMMMMMMM"
console.log(a)


//3rd method by using inner HTML

a.innerHTML = "<h1>WELCOME TO DOMMMMMMMM123</h1>"
console.log(a)



// we can add border in JS--------------------->
a.style.border = "20px solid blue"

// we can add padding in JS--------------------->
a.style.padding = "10px"

// For id2 adding padding,margin,border--------------------->

var a=document.getElementById("id2")
a.style.border = "15px solid yellow"
a.style.padding = "100px"
a.style.margin = "45px"