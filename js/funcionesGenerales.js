function limpiarInput(idInput){
    document.getElementById(idInput).value = "";
}

function mostrar(contenedor,texto){
    document.querySelector(contenedor).textContent = texto;
}