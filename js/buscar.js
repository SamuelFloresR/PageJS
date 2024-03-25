let lista =[];
document.getElementById("anadir").addEventListener("click",()=>{
    let input = parseFloat(document.getElementById("numero").value);
    lista.push(input);

    let contenedor = document.getElementById("listaValores");
    contenedor.textContent = lista;
    limpiarInput("numero");
});

document.getElementById("buscar").addEventListener("click",(e)=>{
    mostrar("#Resultado",`El menor numero es ${MinMax().menor}, y el mayor es ${MinMax().mayor}`)
});

let MinMax = ()=>{

    let menor = lista[0];
    let mayor = lista[0];

    //buscar el menor numero
    for(let i = 1; i<= lista.length-1;i++){
        if(menor > lista[i]){
            menor = lista[i];
        }
    }

    //Buscar el mayor
    for(let i=1;i <= lista.length-1;i++){
        if(mayor < lista[i]){
            mayor = lista[i];
        }
    }

 let resultado = {
    menor: menor,
    mayor: mayor 
 }

 return resultado;

}