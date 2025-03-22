let gameSeq = [];
let userSeq = [];

let btnColors = ["yellow", "purple", "red", "green"]; // Renamed btn array
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 300);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 300);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  // Corrected random index calculation
  let randIdx = Math.floor(Math.random() * btnColors.length);
  let randColor = btnColors[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);

  if (!randBtn) {
    console.error(`No button found with class: ${randColor}`);
    return;
  }

  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your Score:<b> ${level} </b><br>Press any key to restart. `;
   document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    },200)
    updateScore();
    reset();
  }
}

function btnPress() {
  
  let btn = this;

  userFlash(btn);
  let userColor = btn.getAttribute("id"); // Fixed typo
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let button of allBtns) { // Renamed loop variable
  button.addEventListener("click", btnPress);
}
function reset(){
   started=false;
   gameSeq=[];
   userSeq=[];
   level=0;
}
let highestScore = localStorage.getItem("highestScore") || 0;

function updateScore(currentScore) {
    if (currentScore > highestScore) {
        highestScore = currentScore;
        localStorage.setItem("highestScore", highestScore);
        console.log(highestScore);
    }
}
function changeColor(collor,delay){
  new promise ((resolve,reject=>{
    setTimeout()
  }))
}