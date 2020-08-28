var elemento = document.createElement("li");

var contenido = "Nuevo Texto";

var relleno =document.createTextNode(contenido);

elemento.appendChild(relleno);

//document.body.appendChild(elemento);
//var padre  = document.getElementById("lista");
//padre.appendChild(elemento);
var padre = document.getElementsByTagName("li")[0].parentNode;
var hijo = document.getElementsByTagName("li")[1];
padre.insertBefore(elemento, hijo);

