let container = document.querySelector(".container");
let divRows = [];
let divCols = [];

// draw a grid of specified dimensions
function grid(dimensions = 16) {
    for(let i = 0; i < dimensions; i++) {
        divRows[i] = document.createElement("div");
        divRows[i].classList.add("rows");
        divRows[i].style.height = `calc(100% / ${dimensions})`;
        container.appendChild(divRows[i]);
    }
    
    for(let i = 0; i < dimensions; i++) {
        for(let j = 0; j < dimensions; j++) {
            divCols[j] = document.createElement("div");
            divCols[j].classList.add("cols");
            divRows[i].appendChild(divCols[j]);
            
            divRows[i].children[j].onmouseover = function() {
                divRows[i].children[j].style.backgroundColor = setColor();
            }
            
        }
    }
}

// create a new grid specified by user
let newGrid = document.querySelector(".new-btn");
newGrid.addEventListener("click", function() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let dimensions = prompt("Enter the dimension for new grid", "");
    grid(dimensions);
});

// clear grid and draw new grid of deault 16x16 dimensions
let clearGrid = document.querySelector(".clear-btn");
clearGrid.addEventListener("click", function () {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    grid();
});


// color functions
let color;
let randColors = document.querySelector(".rand-colors");
randColors.addEventListener("click", function() {
    color = true;
});

let defaultColor = document.querySelector(".default-color");
defaultColor.addEventListener("click", function() {
    color = false;
});

function getRandColor() {
    let hue = Math.floor((Math.random() * 360));
    let randColor = `hsl(${hue}, 70%, 50%)`;
    return randColor;
}

function setColor() {
    if(color) {
        return getRandColor();
    } else {
        return "black";
    }
}

// draw initial grid of 16x16 pixels
grid();