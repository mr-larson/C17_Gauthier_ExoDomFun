// Exo Counter
let i = 1
let count = document.querySelector("span")
console.log(count.textContent)
let button0 = document.querySelector("button")
button0.addEventListener("click", () =>{
    count.textContent = i
    i++
    console.log(count.textContent)
})

//Exo Move Square
let parentSquare = document.getElementById("parent-square")
let square = parentSquare.firstElementChild
square.textContent = ('off')

/* square.addEventListener("click", () =>{
    parentSquare.setAttribute("style", "display:flex; justify-content: flex-end")
    square.style.backgroundColor = "green"
    square.textContent = ('on')
    square.addEventListener("click", () =>{
        parentSquare.setAttribute("style", "display:flex; justify-content: flex-start")
        square.style.backgroundColor = "red"
        square.textContent = ('off')
    })
}) */

square.addEventListener('click', () =>{
    square.classList.toggle("on")
    square.classList.toggle("off")
    console.log(square.className)
    if (square.className == "on"){
        square.textContent = 'on'   
    }
    else{
        square.textContent = 'off'
    }

})
// Exo Numerote Title
let title = document.querySelectorAll ("h2")

document.addEventListener("keypress", (e) =>{
    if (e.key == 6 ){
       title.forEach((element, index) => {
           element.textContent = `${index}. ${element.textContent}`
       }) 
    }
})

// Exo Multi Click
let change = document.getElementById("multi-click")
change.addEventListener ("click", () =>{
    change.style.borderRadius = "50%"
    change.addEventListener ("click", () =>{
        change.style.backgroundColor = "red"
    })
})

// Exo Set Color
let couleur = document.getElementById('pick-color')
let p = couleur.nextElementSibling

couleur.addEventListener('change', () => {
    p.style.color = couleur.value
})
//--------------------------------------------------