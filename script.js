
let color = "black";
let click = true;
let modeText = document.querySelector('.mode');
let board = document.querySelector('.board');
document.querySelector('.errorText').style.display = 'none';
function populateBoard(size) {
    click = !true;
    modeText.style.display = 'flex';
    modeText.textContent = "Pen is disabled."
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let boardSize = size * size;
    for(let i = 0; i < boardSize; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', squareColor);
        square.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', square)
    };
    board.addEventListener('click', mode);
}

function resetBoard() {
    let board = document.querySelector('.board');
    let allSquare = board.querySelectorAll('div');
    allSquare.forEach(div => div.style.backgroundColor = 'white');
    modeText.textContent = "";
    color = 'black';
    click = !true;
    document.querySelector('.errorText').style.display = 'none';
    if(click) {
        modeText.textContent = "You can now keep drawing."
    } else {
        modeText.textContent = "Pen is disabled."
    }
    
}

function changeSize(input) {
    if (input >= 2 && input <= 100) {
        document.querySelector('.errorText').style.display = 'none';
        populateBoard(input);
    } else {
        document.querySelector('.errorText').style.display = 'flex';
        board.innerHTML = "";
        board.style.backgroundColor = 'white';
        modeText.style.display = 'none';
        
    }
};

function changeColor(choice) {
    color = choice;
}

function squareColor() {
    if (click) {
    if (color == 'random') {
        this.style.backgroundColor = `hsl(${Math.floor(Math.random() * 360)}, 100%, 50%)`;
    } else {
        this.style.backgroundColor = color;
    }
}
}
populateBoard(16);
document.querySelector('.board').addEventListener('click', () => {
    click = !click;
});

function mode() {
    if(!click) {
        modeText.textContent = "You can now keep drawing."
    } else {
        modeText.textContent = "Pen is disabled."
    }
}