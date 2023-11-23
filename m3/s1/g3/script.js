"use strict";
class Tasse {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        this.codredd = codredd;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
}
class Lavoratore extends Tasse {
    constructor(codredd, redditoannuolordo, tasseinps, tasseirpef) {
        super(codredd, redditoannuolordo, tasseinps, tasseirpef);
    }
    get getUtileTasse() {
        return this.getRedditoAnnuoNetto - this.getTasseInps - this.getTasseIrpef;
    }
    get getTasseInps() {
        return this.getRedditoAnnuoNetto * (this.tasseinps / 100);
    }
    get getTasseIrpef() {
        return this.getRedditoAnnuoNetto * (this.tasseirpef / 100);
    }
    get getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.redditoannuolordo * (this.codredd / 100);
    }
    printLine(n) {
        for (let i = 0; i < n; i++) {
            console.log('-----------------------------------------------------------------------');
        }
        // console.log("----------------------------------------------------------------");
    }
    printInfo() {
        this.printLine(2);
        console.log(`Il Lavoratore ha un reddito annuo di ${this.redditoannuolordo}`);
        this.printLine(1);
        console.log(`Il Lavoratore pagherà le tasse su un reddito imponibile di ${this.getRedditoAnnuoNetto}`);
        this.printLine(1);
        console.log(`Il Lavoratore pagherà una aliquota IRPEF : ${this.tasseirpef} : ${this.getTasseIrpef}`);
        this.printLine(1);
        console.log(`Il Lavoratore pagherà una aliquota INPS : ${this.tasseinps} : ${this.getTasseInps}`);
        this.printLine(1);
        console.log(`Il Lavoratore avrà quindi un utile netto di ${this.getUtileTasse}`);
    }
}
let persona1 = new Lavoratore(40, 50000, 26.5, 10);
persona1.printInfo();
let persona2 = new Lavoratore(22, 100000, 26.5, 27);
persona2.printInfo();
