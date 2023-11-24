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




function mostraCredito(smartphone:Smartphone):void {
    console.log(`Il credito residuo è di ${smartphone.numero404()}`);
}

function mostraNumeroChiamate(smartphone:Smartphone):void {
    console.log(`Il numero di chiamate è ${smartphone.getNumeroChiamate()}`);
}

function mostraRegistroChiamate(smartphone:Smartphone):void{
    console.log(`Il registro chiamate è il seguente:`);
    smartphone.registroChiamate.forEach(chiamata => console.log(chiamata.id, chiamata.data.toLocaleTimeString(), chiamata.data.toLocaleDateString(), chiamata.durata, chiamata.data));
}

function filtraChiamate(smartphone:Smartphone, ora:number):void {
    let oraConvertita:Date = converteToHourDate(ora);
    // console.log(oraConvertita);
    // smartphone.registroChiamate.forEach(chiamata => console.log(chiamata.data));
    let registroChiamateFiltrato:infoC[] = smartphone.registroChiamate.filter(chiamata => chiamata.data >= oraConvertita);
    if (registroChiamateFiltrato.length > 0) {
    console.log(`Il registro chiamate dalle ${ora} filtrato è il seguente:`);
    registroChiamateFiltrato.forEach(chiamata => console.log(chiamata.id, chiamata.data.toLocaleTimeString(), chiamata.data.toLocaleDateString(), chiamata.durata));
    }
    else {
        console.log(`Non ci sono chiamate da quest'ora in poi`);
    }
}

function converteToHourDate(data:number):Date{
    let now:Date = new Date();
    return new Date(now.getFullYear(), now.getMonth(), now.getDate(), data, 0, 0);
}

console.log(converteToHourDate(11));
