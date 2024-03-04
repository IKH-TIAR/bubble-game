function makeBubble() {  
    let bubbles ="";
    
    for (let i = 0; i < 147; i++) { 
        let rn = Math.floor(Math.random() * 10) + 1;
        bubbles += `<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#bottom-panel").innerHTML = bubbles;
}

function newHit() {
    let rn = Math.floor(Math.random() * 10) + 1;
    document.querySelector("#hitvalue").textContent = rn;
}


function timer() {
    let timevalue = 60;
    let timerfunc = setInterval(function () { 
        if (timevalue >= 0) {
            document.querySelector("#timevalue").textContent = timevalue;
            timevalue--;
        } else {
            clearInterval(timerfunc);
        }
    }, 1000);
}

makeBubble();
newHit();
timer();