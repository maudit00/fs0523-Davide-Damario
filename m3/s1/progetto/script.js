"use strict";
class Smartphone {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
        this.id = 0;
        this.registroChiamate = [];
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `${this.carica}€`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        this.numeroChiamate++;
        this.carica -= min * this.costoMinuto;
        this.infoChiamata = {
            id: this.id++,
            durata: min,
            data: new Date()
        };
        this.registroChiamate.push(this.infoChiamata);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        this.id = 0;
    }
}
let smart1 = new Smartphone();
smart1.ricarica(10);
mostraCredito(smart1);
smart1.chiamata(25);
mostraRegistroChiamate(smart1);
mostraCredito(smart1);
mostraNumeroChiamate(smart1);
smart1.chiamata(30);
mostraRegistroChiamate(smart1);
mostraCredito(smart1);
mostraNumeroChiamate(smart1);
filtraChiamate(smart1, 11);
smart1.azzeraChiamate();
mostraNumeroChiamate(smart1);
function mostraCredito(smartphone) {
    console.log(`Il credito residuo è di ${smartphone.numero404()}`);
}
function mostraNumeroChiamate(smartphone) {
    console.log(`Il numero di chiamate è ${smartphone.getNumeroChiamate()}`);
}
function mostraRegistroChiamate(smartphone) {
    console.log(`Il registro chiamate è il seguente:`);
    smartphone.registroChiamate.forEach(chiamata => console.log(chiamata.id, chiamata.data.toLocaleTimeString(), chiamata.data.toLocaleDateString(), chiamata.durata, chiamata.data));
}
function filtraChiamate(smartphone, ora) {
    let oraConvertita = converteToHourDate(ora);
    // console.log(oraConvertita);
    // smartphone.registroChiamate.forEach(chiamata => console.log(chiamata.data));
    let registroChiamateFiltrato = smartphone.registroChiamate.filter(chiamata => chiamata.data >= oraConvertita);
    if (registroChiamateFiltrato.length > 0) {
        console.log(`Il registro chiamate dalle ${ora} filtrato è il seguente:`);
        registroChiamateFiltrato.forEach(chiamata => console.log(chiamata.id, chiamata.data.toLocaleTimeString(), chiamata.data.toLocaleDateString(), chiamata.durata));
    }
    else {
        console.log(`Non ci sono chiamate da quest'ora in poi`);
    }
}
function converteToHourDate(data) {
    let now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), data, 0, 0);
}
console.log(converteToHourDate(11));
//# sourceMappingURL=script.js.map