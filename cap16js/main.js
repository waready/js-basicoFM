var primerElemento = document.getElementById("primero");
primerElemento.innerHTML= "hola como estas lorem ipsum";
//primerElemento.textContent= "hola como estas lorem ipsum";

var elemento = document.createElement("li");

var contenido = "Nuevo Texto";

var relleno =document.createTextNode(contenido);

elemento.appendChild(relleno);

var padre = document.getElementsByTagName("li")[0].parentNode;
var referencia = document.getElementsByTagName("li")[0];
padre.replaceChild(elemento, referencia)

padre.removeChild(document.getElementsByTagName("li")[1])