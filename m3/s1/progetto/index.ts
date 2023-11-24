import { Smartphone } from "./script.js"

let smartphone: Smartphone | null = null;
const startBtn = <HTMLDivElement | null>document.getElementById("start-button");
const ricarica = <HTMLDivElement | null>document.querySelector(".ricarica-button");

startBtn?.addEventListener("click", start);
ricarica?.addEventListener("click", renderRicarica);


showTime()
setInterval(showTime, 60000)

function start(): void {
    let screen = <HTMLDivElement | null>document.querySelector(".phone-screen");
    let startBtn = <HTMLDivElement | null>document.getElementById("start-button");
    screen ? screen.style.visibility = "visible" : console.error("no screen selected");
    startBtn ? startBtn.style.visibility = "hidden" : console.error("no start button");
    smartphone = new Smartphone();
}

function showTime(): void {
    let timeSpan = document.querySelector<HTMLElement>('.mobile-time');
    if (!timeSpan) return
    let now: Date = new Date
    let hours: number = now.getHours()
    let minutes: number | string = (now.getMinutes() < 10) ? '0' + now.getMinutes() : now.getMinutes()
    timeSpan.innerHTML = `${hours}:${minutes}`
}


function renderRicarica(): void {
    let screen = <HTMLDivElement | null>document.querySelector(".phone-screen")
    screen ? screen.style.visibility = "hidden" : console.error("no screen selected");
    let ricaricaArea = <DocumentFragment | null>cloneTemplate("ricarica")
    let container = <HTMLDivElement | null>document.querySelector(".phone-container")
    if (container && ricaricaArea) {
        container.append(ricaricaArea)
    } else console.error("no container or ricarica area")

    let ricarica = <HTMLDivElement | null>document.querySelector("#ricarica-button")
    let quantità = <HTMLInputElement | null>document.querySelector("#quantità")
    ricarica ? ricarica.addEventListener("click", () => {
        smartphone?.ricarica(quantità ? parseFloat(quantità.value) : 0)
        Swal.fire({
            icon: "success",
            title: "Ricarica effettuata con successo!",
            text: `la tua ricarica di ${quantità? quantità.value : 0} è stata effettuata`,
          });
    }): console.error("no ricarica button")
}
// function renderCredito ():void {

// }

function cloneTemplate(template: string): DocumentFragment | null {
    let temp = <HTMLTemplateElement | null>document.getElementById(template);
    return temp? temp.content.cloneNode(true) as DocumentFragment : null;
}