document.getElementById("startGame").addEventListener("click", startGame);
let startScreen = document.getElementsByClassName("start-game")[0];
let playScreen = document.getElementsByClassName("play-game")[0];
let state = initState();
let game = prepareGame();

document.addEventListener("keyup", keyupFun);
document.addEventListener("keydown", keydownFun);

let availableCode = [
    "ArrowUp",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "Space"
]

function keyupFun(e){
    // console.log(e.code)
    if (availableCode.includes(e.code)) {
        state.keys[e.code] = false;
    }
}

function keydownFun(e) {
    if (availableCode.includes(e.code)) {
        state.keys[e.code] = true;
    }
}


function startGame(e){
    startScreen.style.display = "none";
    playScreen.style.display = "block";

    start(state, game);
}