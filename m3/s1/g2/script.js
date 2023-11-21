"use strict";
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
//# sourceMappingURL=script.js.map