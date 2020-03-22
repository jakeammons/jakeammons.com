function randomColor() {
    return "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, "0");
}
let timer = setInterval(update, 1000);
function update() {
    let color = randomColor();
    Array.from(document.getElementsByClassName("name-text")).forEach((element) => {
        element.style.color = color;
    })
    document.body.style.backgroundColor = randomColor();
}
