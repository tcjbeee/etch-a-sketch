let size = 16;
let column = 0;
let row = 0;

console.log("Hello World!");

const gridBox = document.getElementById("container");

function createGrid (size) {

    if (size > 100) {

        alert("This grid is too big - please enter another number!");

    }

    else {

        for (column = 0; column < size; column++) {

            
            for (row = 0; row < size; row++) {
                
                const smallBox = document.createElement("div");
                smallBox.style.backgroundColor = "white";

                smallBox.style.gridRow = row;
                smallBox.addEventListener("mouseover", function event(smallBox) {
                    smallBox.target.style.backgroundColor = "black";
                })

                gridBox.appendChild(smallBox);
            
            }
        }
    }
}

createGrid(size);
console.log("Grid created!");

resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function (){
    allBoxes = gridBox.children;
    let area = (size * size);
    for (i = 0; i < area; i++){
        allBoxes[i].style.backgroundColor = "white";
    }
})

function emptyGrid (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

sizeButton = document.querySelector("#sizeSelect");

sizeButton.addEventListener("click", function() {
    size = window.prompt("Please enter the height & width of the grid:")
    emptyGrid(gridBox);
    createGrid(size);
})

