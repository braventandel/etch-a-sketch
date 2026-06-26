const container = document.getElementById("container");

const numberOfSquares = 16;



function gridbox(){
    for(let i = 0; i < numberOfSquares; i++) {
        for(let j = 0; j < numberOfSquares; j++) {
    const sketchbox = document.createElement('div');
    container.appendChild(sketchbox);
    sketchbox.style.color = "red";
    sketchbox.style.border = "1px solid black";
    sketchbox.style.width = "36px";
    sketchbox.style.height = "36px";
    sketchbox.classList.add("box");
}
    }
};

gridbox();