let taskbar=document.querySelector(".taskbar")

window.addEventListener("scroll" , show_scroll)
function show_scroll() {
    console.log(window.scrollY)
    if (window.scrollY > 100) {
        taskbar.classList.add("show")
    }else{
        taskbar.classList.remove("show")
    }
    
}


let images= ["./galerie/coffe_shop.jpeg","./galerie/bar.jpeg","./galerie/locatia.webp","./galerie/frappe.webp","./galerie/beers.jpeg","./galerie/orange.jpeg","./galerie/sandwiches.jpeg","./galerie/croissont.jnp"];
// console.log(images)
let imgState= 0;
let imgTag= document.getElementById("imgClickAndChange");
console.log(imgTag)

imgTag.addEventListener("click" , function (event) {
    imgState = (++imgState % 6);
    event.target.src = images[imgState];
});
console.log(imgTag)