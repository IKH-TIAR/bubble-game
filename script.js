let score = 0;
let hitValue = 0;

function makeBubble() {  
    let bubbles ="";
    
    for (let i = 0; i < 147; i++) { 
        let rn = Math.floor(Math.random() * 10) + 1;
        bubbles += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#bottom-panel").innerHTML = bubbles;
}

function newHit() {
    hitValue = Math.floor(Math.random() * 10) + 1;
    document.querySelector("#hitvalue").textContent = hitValue;
}


function timer() {
    let timevalue = 3;
    let timerfunc = setInterval(function () { 
        if (timevalue >= 0) {
            document.querySelector("#timevalue").textContent = timevalue;
            timevalue--;
        } else {
            clearInterval(timerfunc);
            document.querySelector("#bottom-panel").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function updateScore() {
    score += 10;
    document.querySelector("#scorevalue").textContent = score;
}

document.querySelector("#bottom-panel").addEventListener("click", function (event) {
    let clicedValue = Number(event.target.textContent);
    if (clicedValue == hitValue) {
        updateScore();
        newHit();
        makeBubble();
    }
});

makeBubble();
newHit();
timer();