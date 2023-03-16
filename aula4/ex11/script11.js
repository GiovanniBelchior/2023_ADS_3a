coletarDados = () =>{
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    calcularIMC(peso, altura )
}


calcularIMC = (argPeso, argAltura) =>{

    let imc = argPeso / (argAltura * argAltura) 
    document.getElementById("res").innerHTML = imc
    classificarIMC(imc)
}

classificarIMC = (argImc) =>{
    var classificacao = ""

    if(argImc < 18.5){
        classificacao = "desnutrição"
    }
    else if(argImc < 25){
        classificacao = "peso normal"
    }else if(argImc < 30){
        classificacao = "sobrepeso"
    }else if(argImc < 35){
        classificacao = "obesidade I"
    }else if(argImc < 40){
        classificacao = "obesidade II"
    }else{
        classificacao = "obesidade III"
    }

    document.getElementById("status").innerHTML = classificacao
}
