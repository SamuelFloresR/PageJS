let calcular = document.querySelector(".Calcular");
let contenedor = document.querySelector(".contenedorTabla");

calcular.addEventListener("click",(e)=>{
    e.preventDefault();
    let ul = document.createElement("ul");
    let valor = document.getElementById("numero").value;
    limpiar();
    let p = document.createElement("p")
    p.innerHTML = `La tabla de multiplicar de ${valor} es:`
    contenedor.appendChild(p);

    for(let i = 0; i <= 10;i++){
        let li = document.createElement("li");
        let resultado = valor*i

        li.textContent = `${valor} x ${i} = ${resultado}`;
        li.appendChild(anadirBoton());
        ul.appendChild(li);
    }
    contenedor.appendChild(ul);
})

function limpiar(){
    document.getElementById("numero").value = "";

    if(contenedor.firstElementChild){
        contenedor.textContent = "";
    }
}

function anadirBoton(){
    let boton = document.createElement("button");
    boton.textContent  = "x"

    boton.addEventListener("click",()=>{
        let li = boton.parentNode;
        li.remove();
    })
    return boton
}