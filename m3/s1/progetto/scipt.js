"use strict";
class Smartphone {
    constructor() {
        this.carica = 0;
        this.numeroChiamate = 0;
        this.costoMinuto = 0.20;
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
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let smart1 = new Smartphone();
smart1.ricarica(10);
console.log(`Il credito residuo è smart1.numero404();


function mostraCredito():void {

    console.log(`, Il, credito, residuo, è, $, { smart1, : .numero404() } `);
});
