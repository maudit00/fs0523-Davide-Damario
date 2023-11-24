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
    costoMinuto = 0.20;

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

console.log(`Il credito residuo è smart1.numero404();


function mostraCredito():void {

    console.log(`Il credito residuo è ${smart1.numero404()}`);
}