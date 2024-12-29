import { textoDataAtual } from "./geraTimestampDoItemComprado.js";

export const editarItem = (elemento) => {
    let novoItem = prompt("Digite o novo nome do item:");

    if (novoItem !== null && novoItem.trim() !== "") {
        const itemTextoAtualizado = elemento.querySelector("#item-titulo");
        itemTextoAtualizado.textContent = novoItem;
        const estavaComprado = elemento.querySelector(".input-checkbox").checked;
        if (estavaComprado) {
            elemento.querySelector(".input-checkbox").checked = true;
            elemento.querySelector(".checkbox-customizado").classList.add("checked");
            itemTextoAtualizado.style.textDecoration = "line-through";
        }
       //Aqui substituir a data e hora
       const dataAtualizado = elemento.querySelector("#texto-data");
       dataAtualizado.innerText = `${textoDataAtual()} (editado)`;
    }

}