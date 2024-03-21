let contenedor = document.querySelector(".Resultado");

let SolesDolares = (e)=>{
    e.preventDefault();
    let valor = parseFloat(document.getElementById("monto").value);

    limpiar();
    let resultado = (valor/3.60).toFixed(2);
    contenedor.textContent = `${valor} ${valor === 1 ? "sol" : "soles"} es ${resultado} dolares`;
}

let dolaresSoles = (e)=>{
    e.preventDefault();
    let valor = document.getElementById("monto").value;
    let resultado = valor*3.60;

    limpiar();    
    contenedor.textContent = `${valor} dolares es ${resultado} soles`;;
}

function limpiar(){
    document.getElementById("monto").value = "";
}