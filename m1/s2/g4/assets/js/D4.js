/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area (l1, l2){
    return (l1 * l2)
}
let areaRettangolo = area (5, 10);
console.log('L\'Area del rettangolo è ' + areaRettangolo );

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum (a ,b) {
    if (a==b) return (a+b)*3
    return a+b

}

let somma = crazySum(6, 5);
console.log('la somma è ' + somma);

let sommaFreccia = (x,y) => {
    if (x==y) return (x+y)*3
    return x+y
}

console.log('la somma è ' + sommaFreccia(5,5));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
const costante = 19;
let crazyDiff = (n,m) => {
    if (n>m) {
      return  Math.abs((n-m)*3)
    }
    return Math.abs(n-m)
}
console.log('La differenza assoluta è ' + crazyDiff(20, costante));

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


let boundary = n => {
    if (n%1 != 0 ){return console.error('Il numero non è un intero');}
        if ((n>20 && n<100) || n == 400){
            return true;
        }
        return false
}
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let epiConcat = 'EPICODE '
let epify = str => {
    let regex = '/epicode/i'
    if (!(typeof str == 'string')) {return console.error('Non è una stringa');}
    if (str.includes(regex)) {return str}
    else {return epiConcat.concat(str)}
}

console.log(epify('epicode'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let check3and7 = n => {
    if (n>0){
        if (!(n%3)) {return true}
        if (!(n%7)) {return true}
    }
    return console.error('Numero non positvo');
}
console.log(check3and7(6));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let reverseString = string1 => {
    let arr1 = string1.split ('')
    let reverseArr = arr1.reverse()
    let reverseString = reverseArr.join('')
    return reverseString 
}

console.log(reverseString('ma porco lui che viene'));
/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst (string){
    if (string.indexOf(' ') >= 0){
        let arr = string.split(' ')
    
     // non capisco come mai no vada -->   arr.forEach((u) => u = u.charAt(0).toUpperCase() + u.slice(1))
        for (let u = 0; u < arr.length ; u++){
            arr[u] = arr[u].charAt(0).toUpperCase() + arr[u].slice(1)
        }
        console.log(arr);
    }
    return string.charAt(0).toUpperCase() + string.slice(1)
    console.log(string);
}

console.log(upperFirst('dio'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let cutString = stringa => {
    if (typeof stringa == 'string'){
    return stringa.slice(1, stringa.length-1)
    }
    return console.error('Non è una stringa');
}
console.log(cutString('cacchiarello bello   '));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */

let giveMeRandom = (n) => [...Array(n)].map(() => Math.round(Math.random() * 10));
console.log(giveMeRandom(40));