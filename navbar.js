const links = document.querySelectorAll("nav li")
const main = document.querySelector("main")

icons.addEventListener("click", () => {
    nav.classList.toggle("active")
})

links.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove("active")
    })
})

main.addEventListener('click', () => {
    nav.classList.remove("active")
})




function openModale() { }
function closeModale() { }