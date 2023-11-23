interface Capo {
    id:number
    codprod:number
    collezione:string
    capo:string
    modello:number
    quantita:number
    colore:string
    prezzoivaesclusa:number
    prezzoivainclusa:number
    disponibile:string
    saldo:number

    getSaldocapo():number;
    getAcquistocapo():number;
}