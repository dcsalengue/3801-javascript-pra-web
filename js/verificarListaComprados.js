const listaComprados = document.getElementById("container-lista-comprados")

export function verificarListaComprados(lista) {
    if (lista.childElementCount !== 0) {
        listaComprados.style.display = "block";
    } else {

        listaComprados.style.display = "none";
    }
}