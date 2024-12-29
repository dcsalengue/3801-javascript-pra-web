export function geraTimestampDoItemComprado()
{    
    const pTimestamp = document.createElement("p");
    pTimestamp.innerText = `${new Date().toLocaleDateString("pt-BR", { weekday: "long" })} (${new Date().toLocaleDateString()}) às ${new Date().toLocaleTimeString("pt-BR", { hour: "numeric", minute: "numeric" })}`;
    pTimestamp.classList.add("texto-data");

    return(pTimestamp)
}