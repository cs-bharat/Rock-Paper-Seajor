const gameButton = document.querySelector("#start-button");
let Roak = 0;
let paper = 1;
let seajor = 2;

let items = ["rock", "paper", "seajor"];
let imagess = ["https://i.pinimg.com/736x/ed/8a/da/ed8adae2b079bfb74a236e5aa98b0bc0.jpg", "https://i.pinimg.com/736x/83/94/bd/8394bd142511ab8135bf66ff79e41308.jpg",
    "https://i.pinimg.com/736x/b6/66/04/b66604aad0f9aec5eb9fa02889ca67f0.jpg"]

// gameButton.addEventListener("click",()=>{
//     let index = Math.floor(Math.random()*3);
//     // console.log(index);
//     console.log(items[index]);
// })

// gameButton.addEventListener("click",()=>{
//     let index2 = Math.floor(Math.random()*3);
//     console.log(items[index2]);
// })

// let leftSide = document.getElementById("left-box");
// let rightSide = document.getElementById("right-box");
let imageRandom1 = document.getElementById("ImageNumber1");
let imageRandom2 = document.getElementById("ImageNumber2");


function games() {
    let index = Math.floor(Math.random() * imagess.length);
    // leftSide.innerHTML = items[index];
    imageRandom1.src = imagess[index];
    let index2 = Math.floor(Math.random() * imagess.length);
    // rightSide.innerHTML = items[index2];
    imageRandom2.src = imagess[index2];
    let output = document.getElementById("winner");
    if (index == 0 && index2 == 0 || index == 1 && index2 == 1 || index == 2 && index2 == 2) {
        output.innerHTML = "Match Drow";
    } else if (index == 0 && index2 == 1 || index == 1 && index2 == 0) {
        output.innerHTML = "Paper Is Winner";
    } else if (index == 0 && index2 == 2 || index == 2 && index2 == 0) {
        output.innerHTML = "Rock Is Winner";
    } else if (index == 1 && index2 == 2 || index == 2 && index == 1) {
        output.innerHTML = "Seajor Is Winner";
    }
    return;
}


gameButton.addEventListener("click", games);
