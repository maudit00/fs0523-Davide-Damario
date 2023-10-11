const input = document.getElementById('task')
const saveButton = document.getElementById('save')
const todo = document.getElementById('todo')
const done = document.getElementById('done')
const todoDiv = document.querySelector('.todo')
const doneDiv = document.querySelector('.done')
const todoTitle = document.createElement('h3')
const doneTitle = document.createElement('h3')



makeToDoTitle()
makeDoneTitle()

saveButton.addEventListener('click', function () {
    if (!input.value) {
        input.classList.add('empty')
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Non hai messo il testo',
        })
        return
    }
    let li = document.createElement('li')
    todoTitle.style.display = 'block'
    doneTitle.style.display = 'block'
    li.innerText = input.value
    li.classList.add('itemToDo')
    pushItemDone(li)
    let eraseButton = document.createElement('button')
    eraseButton.innerText = 'Elimina'
    eraseButton.classList.add('eraseButton')
    li.append(eraseButton)
    eraseButton.addEventListener('click', function () {
        li.remove()
    })
    todo.prepend(li)
   
    input.value = ''
    input.classList.remove('empty')
})

const eraseButtons = document.querySelectorAll('li button')


function pushItemDone(e) {
    const testo = e.firstChild
    testo.addEventListener('click', function (){
        alert('dajempo')
    })
}

// function pushItemToDo(e) {
//     e.classList.add('itemToDo')
//     e.classList.remove('itemDone')
//     todo.prepend(e)
// }

function makeToDoTitle() {
    todoTitle.innerText = 'Da Fare : '
    todoTitle.classList.add('todoTitle')
    todoDiv.prepend(todoTitle)
    todoTitle.style.display = 'none'
}

function makeDoneTitle() {
    doneTitle.innerText = 'Completati : '
    doneTitle.classList.add('doneTitle')
    doneDiv.prepend(doneTitle)
    doneTitle.style.display = 'none'
}



// for (let item of itemToDo) {
//     item.addEventListener('click', function () {
//         pushItemDone(item)
//         const itemDone = document.querySelectorAll('.itemDone')
//         for (let itemd of itemDone) {
//             itemd.addEventListener('click', function () {
//                 pushItemToDo(itemd)
//             })
//         }
//     })
// }
