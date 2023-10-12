const tableArea = document.getElementById('container')
const testa = tableArea.querySelector('.head')
const numbersArea = tableArea.querySelector('.numbersContainer')


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
      numCheck()
    })
}

function numbersTable (){
    for (let i = 1; i <= 76; i++){
        let tab = document.createElement('div')
        tab.innerText = i
        tab.classList.add('numTab')
        numbersArea.append(tab)
    }
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

function numCheck(){
    const src = tableArea.querySelector('.sortedNumberDisplay').innerText
    //const nums = Array.from(tableArea.querySelectorAll('.numTab'), e=> e.innerText)
    const tabs = tableArea.querySelectorAll('.numTab')
    for (let num of tabs){
        if (num.innerText == src){
            num.classList.add('extracted')
        }
    }
    console.dir(tabs);
}



