export function textoDataAtual(){
    return(`${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`);
}

export function geraTimestampDoItemComprado()
{    
    const pTimestamp = document.createElement("p");
    pTimestamp.id = "texto-data";
    // pTimestamp.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    pTimestamp.innerText = textoDataAtual();
   pTimestamp.classList.add("texto-data");

    return(pTimestamp)
}