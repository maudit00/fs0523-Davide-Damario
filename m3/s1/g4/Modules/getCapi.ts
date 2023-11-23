type tipoCapo = {
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
    
    getSaldocapo(): number
    getAcquistocapo(): number
}

export async function getCapi ():Promise<tipoCapo[]> {
    let res:Response = await fetch('http://127.0.0.1:5500/Abbigliamento.json')
    let data:tipoCapo[] = await res.json()
    return data;
}


