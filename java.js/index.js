function calculate(){
    var height=(document.getElementById("height").value)/100
    var peso=document.getElementById("peso").value
    
    var imc = peso / height ** 2;
    var text=""
    if(imc<18.5){
        text=("Você está magro")
    }
    else if(imc<24.9){
        text=("Você está normal")
    }
    else if(imc<39.9){
        text=("Você está sobre o peso")
    }
    else if(imc<39.9){
        text=("Você está com obesidade")
    }
    else if(imc>39.9){
        text=("Você está com obesidade mórbida")
    }
    document.getElementById("text-area").innerText=text
}
 