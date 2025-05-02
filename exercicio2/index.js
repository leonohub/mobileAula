vetor = []

function updateVetor(){
    var lista = document.getElementById('lista')
    while (lista.firstChild) { 
        lista.firstChild.remove(); 
    }
    for (let i = 0; i < vetor.length; i++) {
        
        var item = document.createElement('li')
        lista.appendChild(item)
        item.innerHTML = vetor[i]
    }
}


function incluir(){
    var valor = document.getElementById('res').value
    valor = parseFloat(valor)
    if(isNaN(valor)){
    } else {
        vetor.push(valor)
        updateVetor()
    }
}

function remover() {
    var valor = document.getElementById('res').value
    valor = parseFloat(valor)

    if (!isNaN(valor)) {
        for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] === valor) {
                vetor.splice(i, 1)
                i-- // voltamos uma posição para não pular o próximo item
            }
        }
        updateVetor()
    } else {
        alert("Digite um número válido para remover")
    }
}

