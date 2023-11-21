class SonAccount {
    public balanceInit:number= 0;
    public balance:number= 0;
    public depositAmount:number= 0;
    public withdrawAmount:number= 0;

    oneDeposit(amount:number):number{
        console.log(`Verranno versati ${amount}€ nel saldo: ${this.balance}€`);
        this.balance += amount;
        this.depositAmount += amount;
        console.log(`La quantità di versamenti questo mese è: ${this.depositAmount}€`);
        console.log(`Il saldo attuale dopo il versamento è: ${this.balance}€`);
        return this.balance;
    }

    oneWithdraw(amount:number):number{
        console.log(`Verranno prelevati ${amount}€ dal saldo: ${this.balance}€`);
        this.balance -= amount;
        this.withdrawAmount += amount;
        console.log(`La quantità di prelievi questo mese è: ${this.withdrawAmount}€`);
        console.log(`Il saldo attuale dopo il prelievo è: ${this.balance}€`);
        return this.balance;
    }        
}


class MotherAccount extends SonAccount {
    interestsAmount:number= 0;

    addInterests(interest:number):number{
    console.log(`Sta per essere applicato un interesse di: ${interest}€ % al saldo: ${this.balance}€`);
    this.balance *= (interest/100);
    this.interestsAmount += (interest/100);
    console.log(`Gli interessi maturati in questo mesè sono: ${this.interestsAmount}€`);
    console.log(`Il saldo attuale dopo l'aggiunta dell'interessi è: ${this.balance}€`);
    return this.balance;
    }
}


let account1 = new SonAccount();
let account2 = new MotherAccount();

account1.oneDeposit(100);



account1.oneWithdraw(100);

