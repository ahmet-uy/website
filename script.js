const pixels = document.getElementsByTagName("td");
const colors = document.getElementsByTagName("p")
let pixel = document.getElementsByTagName("td")[0];
let color = ""
function pixelWasClicked() {
    for (const element of pixels) {
        element.addEventListener("click", function(){
            pixel = element;
            colorChange();
        })
    }
}
function colorChange() {
    for (const element of colors) {
        element.addEventListener("click", function() {
            color = element.id;
        }) 
    }
     pixel.style.backgroundColor = color;
}
pixelWasClicked();
colorChange();
