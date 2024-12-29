import { geraTimestampDoItemComprado } from "./geraTimestampDoItemComprado.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { excluirItem } from "./excluirItem.js";
import { editarItem } from "./editarItem.js";

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

export function criarItemDaLista(item) {
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("lista-item-container");

    const containerNomeDoItem = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("container-checkbox");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("input-checkbox");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function (evento) {
        const checkboxInput = evento.currentTarget.querySelector(".input-checkbox");
        const checkboxCustomizado = evento.currentTarget.querySelector(".checkbox-customizado");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo")
        if (checkboxInput.checked) {
            checkboxCustomizado.classList.add("checked");
            itemTitulo.style.textDecoration = "line-through";
            listaComprados.appendChild(itemDaLista)
        } else {
            checkboxCustomizado.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista)
        }

        verificarListaComprados(listaComprados)
    })

    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox)

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = item;
    containerNomeDoItem.appendChild(nomeDoItem)

    const containerBotoes = document.createElement("div");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    imagemRemover.src = "img/delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("mouseover", () => {
        imagemRemover.src = "img/delete-hover.svg";
    })
    botaoRemover.addEventListener("mouseout", () => {
        imagemRemover.src = "img/delete.svg";
    })

    botaoRemover.addEventListener("click", () => {
        excluirItem(itemDaLista)
    })


    botaoRemover.appendChild(imagemRemover);
    containerBotoes.appendChild(botaoRemover);

    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("item-lista-button")

    const imagemEditar = document.createElement("img");
    imagemEditar.id = "icone-editar"
    imagemEditar.src = "img/edit.svg";
    imagemEditar.alt = "Editar";

    botaoEditar.addEventListener("mouseover", () => {
        imagemEditar.src = "img/edit-hover.svg";
    })

    botaoEditar.addEventListener("mouseout", () => {
        imagemEditar.src = "img/edit.svg";
    })

    botaoEditar.addEventListener("click", () => {
        editarItem(itemDaLista)
    })

    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);


    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(geraTimestampDoItemComprado());

    return itemDaLista;
}