//moving img

let imgPos = document.querySelector(".mapImage");
let mousePressed = false;
document.addEventListener("mousedown", () => mousePressed = true)
document.addEventListener("mouseup", () => mousePressed = false)
document.addEventListener("mousemove", (e) => movImg(e));

function movImg(e) {
    if (mousePressed === true) {
        imgPos.style.top = e.clientY + "px";
        imgPos.style.left = e.clientX + "px";
    }
}
//


//zoom setup

let currentZoom = 1;
let minZoom = 1;
let maxZoom = 3;
let stepSize = 0.1;


let container = document.querySelector(".map");

container.addEventListener('wheel', function (event) {
    // Zoom in or out based on the scroll direction 
    let direction = event.deltaY > 0 ? -1 : 1;
    zoomImage(direction);
});



function zoomImage(direction) {
    let newZoom = currentZoom + direction * stepSize;

    // Limit the zoom level to the minimum and maximum values 
    if (newZoom < minZoom || newZoom > maxZoom) {
        return;
    }

    currentZoom = newZoom;

    // Update the CSS transform of the image to scale it 
    let image = document.querySelector(".map");
    image.style.transform = 'scale(' + currentZoom + ')';
}
//
