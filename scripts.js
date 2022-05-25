bigGridElement = document.getElementById("container");

function gridElementCreate(bigGridElement, column) {
    const newGridElement = document.createElement("div");
    newGridElement.className = "gridBox";
    //gridArray.push(newGridElement);
    newGridElement.setAttribute("style", "background: blue; height: auto; width: auto; justify-content: center;");
    newGridElement.style.gridRow = row;
    newGridElement.style.gridColumn = column;
    bigGridElement.appendChild(newGridElement);
    document.body.insertAdjacentElement("beforeend", bigGridElement);
}


let position;

for (column= 1; column < 16; column++) {
    for (row=1; row < 16; row ++){
        gridElementCreate(bigGridElement, column, row);
    }
    gridElementCreate(bigGridElement, column, row);
}

//console.log(gridArray);



//console.log(gridArray);
//gridArray = Array.from(gridArray);
//console.log(gridArray[1]);

//console.log("Grid initialised!"); 



//let boxes = document.getElementsByClassName("container");
//console.log(boxes);

function changeColour(gridArray){
    let box = document.querySelector(gridArray[i, "div"]);
    box.style.background = "red";
}

gridArray = document.querySelectorAll("div");

window.onload = function begin() {
    
    for (i=0; i < gridArray.length; i++){
    //gridArray.forEach(v => v.addEventListener("mouseover", changeColour));
    gridArray = document.querySelectorAll("div");
    gridArray[i].addEventListener("mouseover", changeColour);
}
}


/*function colourChange() {
    for (let box; boxes = gridArray.onmouseover; boxes++) {
        gridElements = gridArray[boxes];
        gridElements.style.background = "red";
        console.log("ping!");
    }
    
}
let gridElements = gridArray[boxes];
gridElements.addEventListener("onmouseover", colourChange); */