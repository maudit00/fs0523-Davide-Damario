import { Smartphone } from "./script.js";
let smartphone = null;
const startBtn = document.getElementById("start-button");
const ricarica = document.querySelector(".ricarica-button");
startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", start);
ricarica === null || ricarica === void 0 ? void 0 : ricarica.addEventListener("click", renderRicarica);
showTime();
setInterval(showTime, 60000);
function start() {
    let screen = document.querySelector(".phone-screen");
    let startBtn = document.getElementById("start-button");
    screen ? screen.style.visibility = "visible" : console.error("no screen selected");
    startBtn ? startBtn.style.visibility = "hidden" : console.error("no start button");
    smartphone = new Smartphone();
}
function showTime() {
    let timeSpan = document.querySelector('.mobile-time');
    if (!timeSpan)
        return;
    let now = new Date;
    let hours = now.getHours();
    let minutes = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes();
    timeSpan.innerHTML = `${hours}:${minutes}`;
}
function renderRicarica() {
    let screen = document.querySelector(".phone-screen");
    screen ? screen.style.visibility = "hidden" : console.error("no screen selected");
    let ricaricaArea = cloneTemplate("ricarica");
    let container = document.querySelector(".phone-container");
    if (container && ricaricaArea) {
        container.append(ricaricaArea);
    }
    else
        console.error("no container or ricarica area");
    let ricarica = document.querySelector("#ricarica-button");
    let quantità = document.querySelector("#quantità");
    ricarica ? ricarica.addEventListener("click", () => {
        smartphone === null || smartphone === void 0 ? void 0 : smartphone.ricarica(quantità ? parseFloat(quantità.value) : 0);
        Swal.fire({
            icon: "success",
            title: "Ricarica effettuata con successo!",
            text: `la tua ricarica di ${quantità ? quantità.value : 0} è stata effettuata`,
        });
    }) : console.error("no ricarica button");
}
// function renderCredito ():void {
// }
function cloneTemplate(template) {
    let temp = document.getElementById(template);
    return temp ? temp.content.cloneNode(true) : null;
}
//# sourceMappingURL=index.js.map