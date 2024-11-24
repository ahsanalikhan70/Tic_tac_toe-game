let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let winnermsgcontainer = document.querySelector(".winner-msg-container");
let winnermsg = document.querySelector(".winner-msg");
let newgamebtn = document.querySelector("#newgame-btn");

let turn0 = true;

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("box was clicked");
    if (turn0) {
      box.innerText = "O";
      turn0 = false;
    } else {
      box.innerText = "X";
      turn0 = true;
    }
    box.disabled = true;

    checkwinner();
  });
});

const disableboxes = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
}
const enableboxes = () =>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}

const checkwinner = () => {
  for (let val of winpattern) {
    let pos1val = boxes[val[0]].innerText;
    let pos2val = boxes[val[1]].innerText;
    let pos3val = boxes[val[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        console.log("winner", pos1val);
        showwinner(pos1val);
        disableboxes();
      }
    }
  }
};

const showwinner = (winner) =>{
    winnermsg.innerText = `CONGRATULATIONS , THE WINNER IS  => "${winner}"`;
    winnermsgcontainer.classList.remove("hide");

}
const resetgame = () => {
    turn0 = true;
    enableboxes();
    winnermsgcontainer.classList.add("hide");

}

newgamebtn.addEventListener("click" , resetgame );
resetbtn.addEventListener("click" , resetgame)
