// Exo Copy Img
/* let btn = document.getElementsByClassName("btn")[0]
let container = document.getElementById ("mignon-container")
let img = document.querySelector("img")

btn.addEventListener("click", () =>{
    let clone = img.cloneNode()
    container.appendChild(clone)
})
console.log(img) */

// Exo Rm Images
/* let container = document.getElementById("mignon2-container")
let img = container.children

container.addEventListener("click", (e) =>{
    if(e.target.tagName == "IMG"){
        e.target.remove()
        if(img.length == 0){
            setTimeout (()=>{
                for(let i = 0; i<5; i++){
                    let clone = e.target.cloneNode()
                    container.appendChild(clone)
                }
            },2000)
        }
    }
    
}) */
// Exo Rm Images Variable
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
let ul = document.querySelector("ul")
let li = document.createElement("li")
li.textContent = 

ul.insertBefore()