let lista =[];

document.getElementById("anadir").addEventListener("click",()=>{
    let input = parseFloat(document.getElementById("numero").value);
    
    if(!isNaN(input)){
        lista.push(input);
    
        let contenedor = document.getElementById("listaValores");
        contenedor.textContent = lista;
        limpiarInput("numero");
    }else{
        alert("Ingresa valores")
    }
   
});

document.getElementById("buscar").addEventListener("click",()=>{
    let input = document.getElementById("numero").value;

    for(let i = 0; i< lista.length;i++){
        if(input == lista[i]){
            mostrar("#Resultado",`Se encontro el numero ${input} en la posicion ${i+1}`)
        }else{
            mostrar("#Resultado",`No se encontro el numero ${input}`)
        }
    }
});

function reset(){
    lista = [];
    document.getElementById("listaValores").textContent ="";
    document.getElementById("Resultado").textContent="";
}
