const input = document.getElementById('task')
const saveButton = document.getElementById('save')
const todo = document.getElementById('todo')
const done = document.getElementById('done')
const todoDiv = document.querySelector('.todo')
const doneDiv = document.querySelector('.done')
const todoTitle = document.createElement('h3')
const doneTitle = document.createElement('h3')

// todo.childNodes.classList.add('itemToDo')
// done.childNodes.classList.add('done')



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
    todoTitle.style.display = 'block'
    doneTitle.style.display = 'block'
    let li = document.createElement('li')
    li.innerText = input.value
    pushItemToDo(li)
    const itemToDo = document.querySelectorAll('.itemToDo')
    itemToDo.forEach(item => {
        item.addEventListener('click', function (){
            pushItemDone(item)
            const itemDone = document.querySelectorAll('.itemDone')
            itemDone.forEach(itemd => {
                itemd.addEventListener('click', function(){
                pushItemToDo(itemd)
                })
            })
        })
    })
    input.value = ''
    input.classList.remove('empty')
})



function pushItemDone(e) {

    e.classList.add('itemDone')
    e.classList.remove('itemToDo')
    done.prepend(e)
}

function pushItemToDo(e) {
    e.classList.add('itemToDo')
    e.classList.remove('itemDone')
    todo.prepend(e)
}

function makeToDoTitle (){
    todoTitle.innerText = 'Da Fare : '
    todoTitle.classList.add('todoTitle')
    todoDiv.prepend(todoTitle)
    todoTitle.style.display = 'none'
}

function makeDoneTitle(){
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

let timeStamp = Date.getTime()
console.log(timeStamp);
