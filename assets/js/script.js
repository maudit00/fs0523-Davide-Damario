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
class SonAccount {
    constructor() {
        this.balanceInit = 0;
        this.balance = 0;
        this.depositAmount = 0;
        this.withdrawAmount = 0;
        this.userName = "Figlio";
    }
    oneDeposit(amount) {
        this.printUserName();
        console.log("DEPOSITO");
        this.printLine();
        this.printLine();
        console.log(`Verranno versati ${amount}€ nel saldo: ${this.balance}€`);
        this.printLine();
        this.balance += amount;
        this.depositAmount += amount;
        console.log(`La quantità di versamenti questo mese è: ${this.depositAmount}€`);
        this.printLine();
        console.log(`Il saldo attuale dopo il versamento è: ${this.balance}€`);
        this.printLine();
        return this.balance;
    }
    oneWithdraw(amount) {
        this.printUserName();
        console.log("PRELIEVO");
        this.printLine();
        this.printLine();
        console.log(`Verranno prelevati ${amount}€ dal saldo: ${this.balance}€`);
        this.printLine();
        this.balance -= amount;
        this.withdrawAmount += amount;
        console.log(`La quantità di prelievi questo mese è: ${this.withdrawAmount}€`);
        this.printLine();
        console.log(`Il saldo attuale dopo il prelievo è: ${this.balance}€`);
        this.printLine();
        return this.balance;
    }
    getBalance() {
        this.printUserName();
        console.log("SALDO");
        this.printLine();
        console.log(`Il saldo attuale è: ${this.balance}€`);
        return this.balance;
    }
    getDepositAmount() {
        this.printUserName();
        console.log("DEPOSITI");
        this.printLine();
        console.log(`La quantità di versamenti questo mese è: ${this.depositAmount}€`);
        return this.depositAmount;
    }
    getWithdrawAmount() {
        this.printUserName();
        console.log("PRELIEVI");
        this.printLine();
        console.log(`La quantità di prelievi questo mese è: ${this.withdrawAmount}€`);
        return this.withdrawAmount;
    }
    printLine() {
        console.log(`--------------------------------------`);
    }
    printUserName() {
        this.printLine();
        console.log(`Account: ${this.userName}`);
    }
}
class MotherAccount extends SonAccount {
    constructor() {
        super(...arguments);
        this.interestsAmount = 0;
        this.userName = "Mamma";
    }
    addInterests(interest) {
        this.printUserName();
        console.log("AGGIUNTA INTERESSE");
        this.printLine();
        this.printLine();
        console.log(`Sta per essere applicato un interesse di: ${interest}% al saldo: ${this.balance}€`);
        this.printLine();
        this.interestsAmount += this.balance * (interest / 100);
        this.balance += (this.balance * interest) / 100;
        console.log(`Gli interessi maturati in questo mesè sono: ${this.interestsAmount}€`);
        this.printLine();
        console.log(`Il saldo attuale dopo l'aggiunta dell'interessi è: ${this.balance}€`);
        this.printLine();
        return this.balance;
    }
    getInterestAmount() {
        this.printUserName();
        console.log("INTERESSI MENSILI");
        this.printLine();
        console.log(`Gli interessi maturati in questo mesè sono: ${this.interestsAmount}€`);
        return this.interestsAmount;
        this.printLine();
        console.log(`Gli interessi maturati in questo mesè sono: ${this.interestsAmount}€`);
        return this.interestsAmount;
    }
}
let account1 = new SonAccount();
let account2 = new MotherAccount();
account1.oneDeposit(100);
account1.oneWithdraw(100);
account1.oneDeposit(600);
account1.oneWithdraw(300);
account1.getBalance();
account1.getDepositAmount();
account1.getWithdrawAmount();
account2.oneDeposit(100);
account2.oneDeposit(300);
account2.oneDeposit(700);
account2.oneWithdraw(450);
account2.addInterests(10);
account2.getBalance();
account2.getInterestAmount();
account2.getDepositAmount();
account2.getWithdrawAmount();
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
console.log('ciao');
