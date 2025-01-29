let taskbar=document.querySelector(".container")

window.addEventListener("scroll" , show_scroll)
function show_scroll() {
    console.log(window.scrollY)
    if (window.scrollY > 100) {
        taskbar.classList.add("show")
    }else{
        taskbar.classList.remove("show")
    }
    
}