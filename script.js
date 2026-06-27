const container = document.getElementById("container");

const numberOfSquares = 16;



function gridbox(){
    for(let i = 0; i < numberOfSquares; i++) {
        for(let j = 0; j < numberOfSquares; j++) {
    const sketchbox = document.createElement('div');
    container.appendChild(sketchbox);
    sketchbox.classList.add("box");

    sketchbox.addEventListener('mouseenter', function(e){
        e.target.classList.add("colored");

        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
    })

   /*  sketchbox.style.border = "1px solid black";
    sketchbox.style.width = "36px";
    sketchbox.style.height = "36px";
  
    sketchbox.addEventListener('mouseenter', function(e){
        e.target.style.backgroundColor = "red";
    }) */
}
    }
};

gridbox();