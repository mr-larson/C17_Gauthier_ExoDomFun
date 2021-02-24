// Exo Copy Img
let btn0 = document.getElementsByClassName("btn")[0]
let container0 = document.getElementById ("mignon-container")
let img0 = document.querySelector("img")

btn0.addEventListener("click", () =>{
    let clone0 = img0.cloneNode()
    container0.appendChild(clone0)
})
console.log(img0)

// Exo Rm Images
let container1 = document.getElementById("mignon2-container")
let img1 = container1.children

container1.addEventListener("click", (e) =>{
    if(e.target.tagName == "IMG"){
        e.target.remove()
        if(img1.length == 0){
            setTimeout (()=>{
                for(let i = 0; i<5; i++){
                    let clone1 = e.target.cloneNode()
                    container1.appendChild(clone1)
                }
            },2000)
        }
    }
    
})
// Exo Rm Images Vr2
/* const container = document.querySelector("#mignon2-container");
removable(container);

function removable(container) {
    const mignons = container.querySelectorAll("*");
    for (const img of mignons) {
        img.addEventListener("click", () => {
            let node = container.removeChild(img);
            restart(node);
        });
    }
}

function restart(node) {
    if (container.childElementCount === 0) {
        setTimeout(() => {
            for (let i = 0; i < 5; i++) {
                container.append(node.cloneNode());
            }
            removable(container);
        }, 1000);
    }
} */

// Exo Add Li
let ul0 = document.querySelector("ul")
let li0 = document.createElement("li")
let li3 = document.querySelectorAll("#exo-add-li > ul > li")[1]
li0.textContent = "li num 2"

ul0.insertBefore(li0,li3)

//Exo Li From Input
let input = document.querySelector('.form-control')
let button = document.querySelector('.form-row>div>button')
let liste = document.querySelector('#exo-li-from-input>ul')

button.addEventListener('click', () => {
    let li4 = document.createElement('li')
    li4.innerText = input.value
    liste.insertBefore(li4, document.querySelectorAll("#exo-li-from-input>ul>li")[0])
    input.value = ''
})

let order = false
let edit = document.querySelector('#exo-li-from-input>button')
edit.addEventListener('click', () => {
    let listeTab = document.querySelectorAll("#exo-li-from-input>ul>li")
    if(order == false){
        edit.className = "btn btn-success mb-4"
        listeTab[0].addEventListener('click', () => {
            liste.addEventListener('click', (e) => {
                let temp = listeTab[0].innerText;
                listeTab[0].innerText = e.target.innerText;
                e.target.innerText = temp
            })
        }, false)
        order = true
    }else if(order == true){
        edit.className = "btn btn-light mb-4";
        listeTab[0].removeEventListener('click', () => {
            liste.addEventListener('click', (e) => {
                let temp = listeTab[0].innerText;
                listeTab[0].innerText = e.target.innerText
                e.target.innerText = temp
            })
        }, false)
    }      
})