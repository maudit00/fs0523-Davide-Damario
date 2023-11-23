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

async function getProducts():Promise<tipoCapo[]> {
    return await fetch("http://127.0.0.1:5500/Abbigliamento.json")
    .then((res):Promise<tipoCapo[]> => res.json())
  }

  async function makeCapi(): Promise<void> {
    let capi:tipoCapo[] = await getProducts();
    console.log(capi);  
  }

  makeCapi();