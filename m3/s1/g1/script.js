"use strict";
let p1Num = 35;
let p2Num = 75;
let random = Math.floor(Math.random() * 100);
console.log(`Il numero estratto è: ${random}`);
if (p1Num == random) {
    console.log("Il giocatore 1 ha indovinato!");
}
else if (p2Num == random) {
    console.log("Il giocatore 2 ha indovinato!");
}
else {
    if (Math.abs(p1Num - random) < Math.abs(p2Num - random)) {
        console.log("Nessuno ci ha azzeccato! Ma il giocatore 1 è quello che ci è andato vicino");
    }
    else
        console.log("Nessuno ci ha azzeccato! Ma il giocatore 2 è quello che ci è andato vicino");
}
