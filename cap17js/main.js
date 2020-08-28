var elemento = document.createElement("div");
elemento.setAttribute("class", "azul");
var padre = document.getElementById("contenedor");
var referencia = document.getElementsByTagName("div")[0];
// document.body.appendChild(elemento);

padre.insertBefore(elemento, referencia)