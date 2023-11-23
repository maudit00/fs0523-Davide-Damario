import { getCapi } from './Modules/getCapi.js'

class Capo {
    constructor(public id: number, public codprod: number, public collezione: string, public capo: string, public modello: number, public quantita: number, public colore: string, public prezzoivaesclusa: number, public prezzoivainclusa: number, public disponibile: string, public saldo:number) {
    }
    getSaldocapo(): number {
        return this.prezzoivainclusa * (this.saldo / 100);
    }
    getAcquistocapo(): number {
        return this.prezzoivaesclusa - this.getSaldocapo();
    }
}

async function makeCapi(): Promise<void> {
    let capi:Capo[] = await getCapi(); 
    capi.forEach(capo => {
    let capoDaScontare:Capo = new Capo(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoivaesclusa, capo.prezzoivainclusa, capo.disponibile, capo.saldo)
    console.log(`Il Capo ${capoDaScontare.capo} ha uno sconto del ${capoDaScontare.saldo} % - ${capoDaScontare.getSaldocapo()}€`)
    console.log(`Il prezzo finale è di ${capoDaScontare.getAcquistocapo()}`);
    })
}

makeCapi();


