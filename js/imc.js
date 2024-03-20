let resultado = document.querySelector(".Resultado");

function calculoIMC (event){
    event.preventDefault();

    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;
    let imc = (peso/(altura*altura)).toFixed(2)
    resultado.textContent = `Tu IMC es ${imc} tienes ${categoria(imc)}`;
    console.log(event)
}

function categoria (imc){
    
    if(imc < 18.5){
        return "Peso insuficiente"
    }else if(imc >= 18.5 && imc < 24.9 ){
        return "Peso saludable normal"
    }else if(imc >= 25 && imc < 29.9){
        return "Sobrepeso"
    }else{
        return (imc >=30 && imc <39.9) ? "Obesidad" : "Obesidad mórbida"
    }


}