/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

pets.forEach((el)=> {console.log(el);})

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

let ordineAlfabetico = el => {
  const petAlfa = [...pets]
  return petAlfa.sort()}
console.log(ordineAlfabetico());

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

let addLicensePlate = c => { 
  for (let i = 0; i < c.length ; i++){
  switch (c[i].brand){
    case  'Ford':
    c[i].licensePlate = 'XC456LF'
    break;
    case  'Peugeot':
    c[i].licensePlate = 'AB897TR'
    break;
    case  'Volkswagen':
    c[i].licensePlate = 'FG007GL'
    break;  
  }
  }
}

console.log(addLicensePlate(cars));

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
const obj = {
  brand: 'Fiat',
  model: '1100',
  color: 'white',
  trims: ['life', 'family', 'vintage'],
  licensePlate: 'AA000BB'
}
cars.push (obj)

console.log(cars);

cars.forEach((t) => t.trims.pop())

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []
cars.forEach((el) => {
  justTrims.push(el.trims[0])
})

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

cars.forEach((el) =>{
  if (el.color.charAt(0) == 'b'){console.log('Fizz');}
  else {console.log('Buzz');}
})

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numeriiray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

let x = 0
while (x != numeriiray.indexOf(32)){
  console.log(numeriiray[x]);
  x++
}
/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ['g', 'n', 'u', 'z', 'd']
const newArray = []
charactersArray.forEach((el) => {
  switch (el) {
    case 'g': newArray.splice(el, 0, 6)
    break;
    case 'n': newArray.splice(el, 0, 12)
    break;
    case 'u': newArray.splice(el, 0, 19)
    break;
    case 'z': newArray.splice(el, 0, 21)
    break;
    case 'd': newArray.splice(el, 0, 4)
    break;
  }
})

console.log(newArray);
