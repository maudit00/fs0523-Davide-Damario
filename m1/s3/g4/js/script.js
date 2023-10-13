const tableArea = document.getElementById('container')
const testa = tableArea.querySelector('.head')
const numbersArea = tableArea.querySelector('.numbersContainer')
let savedNumber = []
let description = document.createElement('p')

mainTitle()
sortArea()
numbersTable()


function sortArea() {
    //creo elementi
    const sortArea = document.createElement('div')
    const display = document.createElement('div')
    const sortBtn = document.createElement('button')
    let contatore = 0
    //do una classe
    sortArea.classList.add('sortArea')
    display.classList.add('sortedNumberDisplay')
    sortBtn.classList.add('btn')
    description.classList.add('description')
    //testo prova
    sortBtn.innerText = 'Estrai'
    description.innerText = 'Inizia premendo sul bottone estrai'
    //attacco elementi
    testa.append(description)
    testa.append(sortArea)
    sortArea.append(display, sortBtn)
    //eventlistener
    sortBtn.addEventListener('click', function () {
        
        let randNum = randomNumber(76)
        display.innerText = randNum
        numCheck(randNum)
        contatore++
        cambiaDescrizione(contatore)
    })
}

function numbersTable() {
    for (let i = 1; i <= 76; i++) {
        let tab = document.createElement('div')
        tab.innerText = i
        tab.classList.add('numTab')
        numbersArea.append(tab)
    }
}

function mainTitle() {
    const titolo = document.createElement('h3')
    titolo.classList.add('titoloPrincipale')
    titolo.innerText = 'Tombola'
    testa.append(titolo)
}


function randomNumber(maxNum) {
    let x = Math.floor(Math.random() * maxNum + 1)
    if (!savedNumber.includes(x)){
        savedNumber.push(x)
        return x
    } else {
        if (savedNumber.length < maxNum){
            return randomNumber(maxNum)
        }else {

            return tombola()
        }
    }
}

function tombola (){
        
        Swal.fire({
        title: 'TOMBOLAAAAA!',
        text: 'Avremo finito i numeri da estrarre',
        imageUrl: 'img/tombola.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Tombola',
      })
}
function numCheck(e) {
    const tabs = tableArea.querySelectorAll('.numTab')
    for (let num of tabs) {
        if (num.innerText == e) {
            num.classList.add('extracted')
        }
    }
}

function cambiaDescrizione (n){
    description.innerText = `Siamo alla ${n}° estrazione`
}


