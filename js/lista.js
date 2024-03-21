let lista = [];
let listaNueva=[];

document.getElementById("anadir").addEventListener("click",()=>{
    let input = document.getElementById("texto").value;
    lista.push(input);

    let contenedor = document.getElementById("ListaHTML");
    contenedor.textContent = lista;
    limpiarInput("texto");
});

document.getElementById("voltear").addEventListener("click",()=>{
    for(let i = lista.length -1; i >= 0 ; i--){
        listaNueva.push(lista[i]);
    }

    mostrar("#ListaAlrevez",listaNueva)
});

function reset(){
    lista =[];
    listaNueva=[];
    document.querySelector("#ListaHTML").textContent ="";
    document.getElementById("ListaAlrevez").textContent="";
    console.log(lista,listaNueva);
}