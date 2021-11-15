const pixels = document.getElementsByTagName("td");
const colors = document.getElementsByTagName("p")
let pixel = document.getElementsByTagName("td");
function pixelWasClicked() {
    for (const element of pixels) {
        element.addEventListener("click", function(){
            pixel = element;
        })
    }
}
function colorChange() {
    for (const element of colors) {
        element.addEventListener("click", function() {
            pixel.style.backGroundColor = element.id;
        })
    }
}
pixelWasClicked();
colorChange();