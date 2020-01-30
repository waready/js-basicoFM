// function saludo(nombre){
//     document.write("hola como estas hoy "+ nombre);
// }
// saludo("pedro");

 var suma = function(numero1, numero2){
    var numero1 = numero1;
    var numero2 = numero2;

    return numero1+ numero2;
}

document.write(suma(9,10));
document.write("<br>");
document.write(suma(10,15));

var numeroMayor = function (valor1 , valor2){
    if(valor1>valor2){
        return valor1;
    
    }else{
        return valor2;
    }
}
document.write("el numero mayor es. " + numeroMayor(15, 78));