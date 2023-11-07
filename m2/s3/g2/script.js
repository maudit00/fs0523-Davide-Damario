const saveButton = document.getElementById("save-button");
const delButton = document.getElementById("del-button");
let nome = document.getElementById("nome");
const display = document.querySelector(".nome-display");
const timerDisplay = document.querySelector(".timer-display");
let sessionTimer = sessionStorage.getItem("timer");
let timer = 0;

if (sessionTimer) {
  timer = sessionTimer; };

setInterval(() => {
timer++;
sessionStorage.setItem("timer", timer);
timerDisplay.innerText = `Sono passati ${timer} secondi dall'inizio sessione`;
}, 1000);


setInterval(() => {
    if (localStorage.getItem("nome")!= null) {
        display.innerHTML = localStorage.getItem("nome");
}},1000);



saveButton.addEventListener('click', () => {
  nomeValue = nome.value;
  localStorage.setItem("nome", nomeValue);

})


delButton.addEventListener('click', () => {
  localStorage.removeItem("nome");
})

