import { printLine } from "./Modules/printLines.js";
export class Smartphone {
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
    chiamata(min, contatto) {
        this.numeroChiamate++;
        this.carica -= min * this.costoMinuto;
        this.infoChiamata = {
            id: this.id++,
            durata: min,
            data: new Date(),
            contatto: contatto
        };
        this.registroChiamate.push(this.infoChiamata);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
        this.id = 0;
    }
    mostraRegistro() {
        return this.registroChiamate;
    }
    filtraRegistro(ora) {
        let oraConvertita = this.converToLocalHourDate(ora);
        if (this.registroChiamate.length == 0)
            return [];
        return this.registroChiamate.filter(chiamata => chiamata.data >= oraConvertita);
    }
    converToLocalHourDate(data) {
        let now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate(), data, 0, 0);
    }
}
let smart1 = new Smartphone();
smart1.ricarica(10);
mostraCredito(smart1);
smart1.chiamata(25, "mamma");
mostraRegistroChiamate(smart1);
mostraCredito(smart1);
mostraNumeroChiamate(smart1);
smart1.chiamata(30, "mamma");
mostraRegistroChiamate(smart1);
mostraCredito(smart1);
mostraNumeroChiamate(smart1);
filtraChiamate(smart1, 10);
smart1.azzeraChiamate();
mostraNumeroChiamate(smart1);
let smart2 = new Smartphone();
smart2.ricarica(50);
mostraCredito(smart2);
smart2.chiamata(10, "mamma");
smart2.chiamata(30, "mamma");
mostraCredito(smart2);
mostraRegistroChiamate(smart2);
mostraNumeroChiamate(smart2);
filtraChiamate(smart2, 15);
smart2.azzeraChiamate();
mostraNumeroChiamate(smart2);
let smart3 = new Smartphone();
smart3.ricarica(100);
mostraCredito(smart3);
smart3.chiamata(45, "mamma");
smart3.chiamata(25, "mamma");
smart3.chiamata(15, "mamma");
mostraCredito(smart3);
mostraRegistroChiamate(smart3);
mostraNumeroChiamate(smart3);
filtraChiamate(smart3, 16);
smart3.azzeraChiamate();
mostraNumeroChiamate(smart3);
mostraRegistroChiamate;
function mostraCredito(smartphone) {
    printLine(2);
    console.log(`Il credito residuo è di ${smartphone.numero404()}`);
    printLine(2);
}
function mostraNumeroChiamate(smartphone) {
    printLine(1);
    console.log(`Il numero di chiamate è ${smartphone.getNumeroChiamate()}`);
    printLine(1);
}
function mostraRegistroChiamate(smartphone) {
    printLine(2);
    console.log(`Il registro chiamate è il seguente:`);
    smartphone.mostraRegistro().forEach(chiamata => console.log("id " + chiamata.id, "contatto " + chiamata.contatto, chiamata.data.toLocaleTimeString(), chiamata.data.toLocaleDateString(), chiamata.durata + 'min'));
    printLine(2);
}
function filtraChiamate(smartphone, ora) {
    if (smartphone.filtraRegistro(ora).length > 0) {
        printLine(1);
        console.log(`Il numero di chiamate filtrato  dalle ${ora} è`);
        printLine(1);
        smartphone.filtraRegistro(ora).forEach(chiamata => console.log("id " + chiamata.id, "contatto " + chiamata.contatto, chiamata.data.toLocaleTimeString(), chiamata.data.toLocaleDateString(), chiamata.durata + 'min'));
    }
    else
        console.log(`Il numero di chiamate filtrato dalle ${ora} è vuoto`);
}
//# sourceMappingURL=script.js.map