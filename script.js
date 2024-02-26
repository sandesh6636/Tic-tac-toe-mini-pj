let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgCointainer = document.querySelector(".msg-winner");
let msg = document.querySelector("#msg");
let turnO = true; //player x   and player O
let count = 0;

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
  turnO = true;
  enableBox();
  msgCointainer.classList.add("hide");
};
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Button clicked");
    if (turnO) {
      box.innerText = "O";
      box.style.color = "red";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "blue";
      turnO = true;
    }
    box.disabled = true;
    count++;
    let isWinner = checkWinner();
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});
const showWinner = (winner) => {
  msg.innerText = `Winner is ${winner}`;
  msgCointainer.classList.remove("hide");
  disableBox();
};
const disableBox = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
const enableBox = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const gameDraw = () => {
  msg.innerText = "Game Draw";
  msgCointainer.classList.remove("hide");
};
checkWinner = () => {
  for (let pattern of winPatterns) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );
    let position1Value = boxes[pattern[0]].innerText;
    let position2Value = boxes[pattern[1]].innerText;
    let position3Value = boxes[pattern[2]].innerText;
    if (position1Value != "" && position2Value != "" && position3Value != "") {
      if (
        position1Value === position2Value &&
        position2Value === position3Value
      ) {
        // console.log("winner", position1Value);

        showWinner(position1Value);
      }
    }
  }
};
resetBtn.addEventListener("click", resetGame);
