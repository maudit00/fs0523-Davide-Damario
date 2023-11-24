interface Sim {
    carica:number;
    numeroChiamate:number;
    costoMinuto:number;

    ricarica(euro:number):void;
    numero404():string;
    getNumeroChiamate():number;
    chiamata(min:number):void;
    azzeraChiamate():void;
}

type infoC = {
    id:number;
    durata:number;
    data:Date;
}

class Smartphone implements Sim {
    carica = 0;
    numeroChiamate = 0;
    costoMinuto = 0.20;
    private id:number=0;
    registroChiamate:infoC[]=[];
    infoChiamata!:infoC;
    

    ricarica(euro:number):void {
    this.carica += euro;
    }

    numero404(): string {
        return `${this.carica}€`;
    }

    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }

    chiamata(min:number): void {
        this.numeroChiamate++;
        this.carica -= min * this.costoMinuto;
        this.infoChiamata = {
            id:this.id++,
            durata:min,
            data:new Date()
        }
        this.registroChiamate.push(this.infoChiamata);        
    }

    azzeraChiamate(): void {
        this.numeroChiamate = 0;
        this.id = 0
    }

    mostraRegistro():infoC[]{
     return this.registroChiamate;
    }

    filtraRegistro(ora:number):infoC[]{
        let oraConvertita:Date = converToLocalHourDate(ora);
        if (this.registroChiamate.length == 0) return [];
        return this.registroChiamate.filter(chiamata => chiamata.data >= oraConvertita);
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
filtraChiamate(smart1, 10);
smart1.azzeraChiamate();
mostraNumeroChiamate(smart1);

let smart2 = new Smartphone();

smart2.ricarica(50)
mostraCredito(smart2);

smart2.chiamata(10);
smart2.chiamata(30);

mostraCredito(smart2);
mostraRegistroChiamate(smart2);
mostraNumeroChiamate(smart2);
filtraChiamate(smart2, 15);

smart2.azzeraChiamate();
mostraNumeroChiamate(smart2);

let smart3 = new Smartphone();

smart3.ricarica(100);

mostraCredito(smart3);

smart3.chiamata(45);
smart3.chiamata(25);
smart3.chiamata(15);
mostraCredito(smart3);
mostraRegistroChiamate(smart3);
mostraNumeroChiamate(smart3);
filtraChiamate(smart3, 14);

smart3.azzeraChiamate();
mostraNumeroChiamate(smart3);
mostraRegistroChiamate






function mostraCredito(smartphone:Smartphone):void {
    console.log(`Il credito residuo è di ${smartphone.numero404()}`);
}

function mostraNumeroChiamate(smartphone:Smartphone):void {
    console.log(`Il numero di chiamate è ${smartphone.getNumeroChiamate()}`);
}

function mostraRegistroChiamate(smartphone:Smartphone):void{
    console.log(`Il registro chiamate è il seguente:`);
    smartphone.mostraRegistro().forEach(chiamata => console.log("id " + chiamata.id, chiamata.data.toLocaleTimeString(), chiamata.data.toLocaleDateString(), chiamata.durata + 'min')
}

function filtraChiamate(smartphone:Smartphone, ora:number):void{
    if (smartphone.filtraRegistro(ora).length > 0) {
    console.log(`Il numero di chiamate filtrato  dalle ${ora} è`);
    smartphone.filtraRegistro(ora).forEach(chiamata => console.log("id " + chiamata.id, chiamata.data.toLocaleTimeString(), chiamata.data.toLocaleDateString(), chiamata.durata + 'min'))
    }
    else console.log(`Il numero di chiamate filtrato dalle ${ora} è vuoto`);
}

// function filtraChiamate(smartphone:Smartphone):void {
//     let registroChiamateFiltrato:infoC[] = smartphone.registroChiamate.filter(chiamata => chiamata.data >= oraConvertita);
//     if (registroChiamateFiltrato.length > 0) {
//     console.log(`Il registro chiamate dalle ${ora} filtrato è il seguente:`);
//     registroChiamateFiltrato.forEach(chiamata => console.log(chiamata.id + "id", chiamata.data.toLocaleTimeString(), chiamata.data.toLocaleDateString(), chiamata.durata + 'min'));
//     }
//     else {
//         console.log(`Non ci sono chiamate dalle ${smartphone.filtraRegistro.ora} in poi`);
//     }
// }

function converToLocalHourDate(data:number):Date{
    let now:Date = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), data, 0, 0);
}