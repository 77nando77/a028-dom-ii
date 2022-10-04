// # Exercício 1
// Utilize o DOM para adicionar uma função ao clique do botão. Ao clicar no botão, um novo item deve ser adicionado ao container. Por enquanto, o item não precisa de estilização. Ele pode ter apenas um texto, para facilitar sua visualização.

// const adicionaItem =(event) =>{
//     const novoItem = document.createElement("article")
//     const conteudo = document.createTextNode("teste")
//     novoItem.appendChild(conteudo)
//     const chamarContainer = document.getElementById("container")
//     chamarContainer.insertAdjacentElement("beforeend", novoItem)
//     console.log(chamarContainer)
// }


// # Exercício 2
// Altere a função criada no exercício 1 para que agora o clique no botão faça a **estilização** do novo item

const adicionaItem =(event) =>{
    const novoItem = document.createElement("article")
    novoItem.classList.add("item")
    novoItem.setAttribute("onclick","removeItem(event)")
    const chamarContainer = document.getElementById("container")
    chamarContainer.insertAdjacentElement("beforeend",novoItem)
    console.log(chamarContainer)
}

// # Exercício 3
// Crie a função `removeItem`, que é chamada pelo `onclick` dos itens do container. Esta função deve **remover** o elemento clicado.
// **Dica**: utilize a propriedade `event.target` para pegar o elemento clicado.

const removeItem = (event) =>{
    event.target.remove()
}