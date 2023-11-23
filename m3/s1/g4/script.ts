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

// let capoProva:Capo = new Capo(4, 1111, "estate", "maglione", 1221, 2, "rosso", 20, 24.40, "negozio", 50)
// console.log(capoProva.getSaldocapo());
// capoProva.getSaldocapo();
// console.log(capoProva.getAcquistocapo());
// capoProva.getAcquistocapo();


async function makeCapi(): Promise<void> {
    let capi:Capo[] = await getCapi(); 
    capi.forEach(capo => {
    let capoDaScontare:Capo = new Capo(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoivaesclusa, capo.prezzoivainclusa, capo.disponibile, capo.saldo)
    console.log(capoDaScontare.getSaldocapo())
    console.log(capoDaScontare.getAcquistocapo());
    })
}

makeCapi();


