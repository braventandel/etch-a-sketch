const container = document.getElementById("container");

const numberOfSquares = 16;

let currentMode = 'sketch';

document.getElementById('btn-sketch').addEventListener('click', () => { currentMode ='sketch'});
document.getElementById('btn-rainbow').addEventListener('click', () => {currentMode = 'rainbow'});

document.getElementById('btn-reset').addEventListener('click',() => { 
    const boxes = document.querySelectorAll('.sketchbox');
    boxes.forEach(sketchbox => {
        sketchbox.style.opacity = 0;
        sketchbox.style.backgroundColor = '';
        sketchbox.dataset.passes = 0;
    })
})



function gridbox(){
    for(let i = 0; i < numberOfSquares; i++) {
        for(let j = 0; j < numberOfSquares; j++) {
    const sketchbox = document.createElement('div');
    container.appendChild(sketchbox);
    sketchbox.classList.add("box");

    sketchbox.addEventListener('mousemove', function(e){
        e.target.classList.add("colored");

        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;

        let currentOpacity = e.target.style.opacity;

        if(currentOpacity === ""){

            e.target.style.opacity = 0.1;

            console.log("First hover! Opacity set to 0.1");

        }else if (Number(currentOpacity) < 0.1){
            e.target.style.opacity = Number(currentOpacity) + 0.1;

            let newOpacity = parseFloat(currentOpacity) + 0.1;
            e.target.style.opacity = newOpacity;
            console.log("Hovered again! New Opacity is: " + newOpacity);
        }
    })

}
    }
};

gridbox();