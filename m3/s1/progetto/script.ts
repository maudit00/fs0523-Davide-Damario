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

class Smartphone implements Sim {
    carica = 0;
    numeroChiamate = 0;
    private costoMinuto = 0.20;
    

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
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}

let smart1 = new Smartphone();

smart1.ricarica(10);

mostraCredito(smart1);

smart1.chiamata(25);

mostraCredito(smart1);
mostraNumeroChiamate(smart1);

smart1.chiamata(30);

mostraCredito(smart1);
mostraNumeroChiamate(smart1);
smart1.azzeraChiamate();
mostraNumeroChiamate(smart1);





function mostraCredito(smartphone:Smartphone):void {
    console.log(`Il credito residuo è di ${smartphone.numero404()}`);
}

function mostraNumeroChiamate(smartphone:Smartphone):void {
    console.log(`Il numero di chiamate è ${smartphone.getNumeroChiamate()}`);
}

