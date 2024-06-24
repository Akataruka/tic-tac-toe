let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true; // player1,player0


let winPatterns = [
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6]
    [3,4,5],
    [6,7,8],
];

const checkWinner = () => {
    for (pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !='' && pos2Val != '' && pos3Val != '' ){
            if (pos1Val === pos2Val && pos2Val === pos3Val){
                console.log(`Winner is: ${pos1Val}`)
                showWinner(pos1Val);
            }
        }
    }
};

const disableBoxes = () =>{
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableBoxes = () =>{
    boxes.forEach((box) => {
        box.disabled = false;
    });
};

const showWinner = (Winner) =>{
    msg.innerText = `Congratulations, Winner is ${Winner}`;
    disableBoxes();
    msgContainer.classList.remove('hide');
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.textContent = '';
        box.disabled = false;
    });
    msgContainer.classList.add('hide');
};

const newGame = () => {
    resetGame();
    enableBoxes();
}




boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if(turn0){
            e.target.textContent = 'X';
            turn0 = false;
        }else{
            e.target.textContent = 'O';
            turn0 = true;
        }
        e.target.disabled = true;
        checkWinner();
    });
});

resetBtn.addEventListener('click', resetGame);
newGameBtn.addEventListener('click', newGame);



