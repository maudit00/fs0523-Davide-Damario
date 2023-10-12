const tableArea = document.getElementById('container')
const testa = tableArea.querySelector('.head')
const numbersArea = tableArea.querySelector('.numbersTable')


mainTitle()
sortArea()
numbersTable()


function sortArea () {
    //creo elementi
    const sortArea = document.createElement('div')
    const display = document.createElement('div')
    const sortBtn = document.createElement('button')
    let description = document.createElement('p')
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
    sortBtn.addEventListener('click', function (){
      let randNum = randomNumber()
      display.innerText =  randNum
    })
}

function numbersTable (){
    let table = document.createElement('div')
    table.classList.add('numbersTable')
    table.innerText = 'CIAOOO'
    numbersArea.append(table)
}

function mainTitle (){
    const titolo = document.createElement('h3')
    titolo.classList.add('titoloPrincipale')
    titolo.innerText = 'Tombola'
    testa.append(titolo)
}


function randomNumber (){
    let x = Math.floor(Math.random()*77)
    console.log(x);
    return x
}