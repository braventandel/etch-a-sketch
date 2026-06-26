const container = document.getElementById("container");

const numberOfSquares = 12;

for(let i = 0; i < numberOfSquares; i++) {
    const sketchbox = document.createElement('div');
    container.appendChild(sketchbox);
    sketchbox.style.color = "red";
    sketchbox.style.border = "1px solid black";
    sketchbox.style.width = "24px";
    sketchbox.style.height = "24px";
    sketchbox.classList.add("box");
}