const createModal = document.querySelector('#modalCreate')

var tarefas = []


function showModal() {
    createModal.style.display = 'block';
}

function closeModal() {
    createModal.style.display = 'none';
}


function getInputs() {
    const name = document.querySelector('#name').value
    const desc = document.querySelector('#desc').value

    let auxObj = {
        nome: name,
        desc: desc
    }

    tarefas.push(auxObj)
    updateUI(name, desc, tarefas.length)
}

function updateUI(name, desc, position) {
    let ulTasks = document.querySelector('#ulTasks')
    let li = document.createElement('li')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    let check = document.createElement('input')
    check.type = "checkbox"
    check.id = position
    
    h1.innerHTML = name
    p.innerHTML = desc
    
    li.classList.add("faltando")
    li.appendChild(check)
    li.appendChild(h1)
    li.appendChild(p)
    ulTasks.appendChild(li)
    check.addEventListener('click', function(){
        updadeLi(li)
    })
    closeModal()
}

function updadeLi(li) {
    li.classList.toggle('concluido')
    li.classList.toggle('faltando')
}

