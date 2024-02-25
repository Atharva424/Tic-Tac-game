let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");

let turn0 = true; //playerX / playerO


let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
    turn0 = true;
    enableboxes()
    msgContainer.classList.add("hide")
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box clicked");
    if (turn0) {
      box.innerText = "0";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }

    box.disabled = true;

    checkWinner();
  });
});
const disableboxes = () => {
    for (let box of boxes ){
        box.disabled = true
    }
}


const enableboxes = () => {
    for (let box of boxes ){
        box.disabled = false
        box.innerText = "";
    }
}



const showWinner = (Winner) =>  {
    msg.innerText = `Congratulations...Winner is ${Winner}`
    msg-msgContainer.classList.remove("hide");
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
  let pos1Val = boxes[pattern[0]].innerText;
  let pos2Val = boxes[pattern[1]].innerText;
  let pos3Val = boxes[pattern[2]].innerText;

  if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
    if (pos1Val === pos2Val && pos2Val === pos3Val){
        console.log("Winner" ,pos1Val)
        showWinner(pos1Val) 
    }
  }
  }
};

resetBtn.addEventListener("click" , resetGame)


