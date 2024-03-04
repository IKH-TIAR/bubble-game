let bubbles ="";

for (let i = 0; i < 147; i++) { 
    let rn = Math.floor(Math.random() * 10) + 1;
    bubbles += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#bottom-panel").innerHTML = bubbles;